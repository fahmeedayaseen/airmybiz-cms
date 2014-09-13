class SuperAdmin::MerchantsController < SuperAdmin::SuperAdminController

  add_breadcrumb "STORE OWNERS", "/super_admin/merchants"

  layout "super_admin"

  def index
    @merchants = User.merchants.sort_by { |u| u.id }
  end

  def new
    @user= User.new
    #render :layout => false
  end

  def show
    user = User.find_by_id(params[:id])
    @merchant = user
    render :layout => false
  end


  def create
    unless params[:user][:date_of_birth].blank?
      time = Time.strptime(params[:user][:date_of_birth], '%m-%d-%Y')
      params[:user][:date_of_birth] = time.strftime("%Y/%m/%d")
    end
    @user = User.new(merchant_params)
    @user.roles << Role.find_by_name("merchant")
    if @user.valid? and register_merchant
      if @user.save
        seed_shop_hours(@user.shop)
        flash[:notice] = "Merchant was successfully Added."
        render :json => {:success => true, :url => super_admin_merchants_path}.to_json
      else
        @errors = @user.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
      end
    else
      @errors = @user.errors
      render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
    end
  end

  def register_merchant
    phone_number = nil
    unless params[:user][:shop_attributes][:phone].blank?
      phone_number = params[:user][:shop_attributes][:phone].gsub("-", "")
    end
    @result = Braintree::MerchantAccount.create(
        :individual => {
            :first_name => @user.name,
            :last_name => @user.name,
            :email => @user.email,
            :phone => phone_number,
            :date_of_birth => params[:user][:date_of_birth],
            #:ssn => "456-45-4567",
            :address => {
                :street_address => params[:user][:shop_attributes][:address],
                :locality => params[:user][:shop_attributes][:city],
                :region => params[:user][:shop_attributes][:state],
                :postal_code => params[:user][:shop_attributes][:zip_code]
            }
        },
        :funding => {
            :destination => Braintree::MerchantAccount::FundingDestination::Bank,
            :email => @user.email,
            :mobile_phone => phone_number,
            :account_number => params[:account_number],
            :routing_number => params[:routing_number]
        },
        :tos_accepted => true,
        :master_merchant_account_id => "3fsj28htzdwyh7dh"
    #:id => "blue_ladders_store"
    )
    if @result.success?
      @user.customer_id = @result.merchant_account.id
      return true
    else
      @brain_errors = @result.errors
      @result.errors.each { |error| @user.errors.add(" ", error.message) }
      return false
    end
  end


  def edit
    @user = User.find_by_id(params[:id])
    #render :layout => false
  end

  def update
    @user = User.find_by_id(params[:id])
    #if @user.update_attributes(merchant_params)
    #  flash[:notice] = "Merchant was successfully Added."
    #  render :json => {:success => true, :url => super_admin_merchants_path}.to_json
    #else
    #  @errors = @user.errors
    #  render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
    #end
    unless params[:user][:date_of_birth].blank?
      time = Time.strptime(params[:user][:date_of_birth], '%m-%d-%Y')
      params[:user][:date_of_birth] = time.strftime("%Y/%m/%d")
    end
    if update_merchant_bank_account
      puts "CCCC"
      successfully_updated = if needs_password?(@user, params)
                               @user.update(merchant_params)
                             else
                               params[:user].delete(:password)
                               @user.update_without_password(merchant_params)
                             end
      if successfully_updated
        flash[:notice] = "Merchant was successfully Added."
        render :json => {:success => true, :url => super_admin_merchants_path}.to_json
      else
        @errors = @user.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
      end
    else
      @errors = @user.errors
      render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
    end
  end

  def update_merchant_bank_account
    phone_number = nil
    unless params[:user][:shop_attributes][:phone].blank?
      phone_number = params[:user][:shop_attributes][:phone].gsub("-", "")
    end
    merchant = User.find_by_id(@user.id)
    result = Braintree::MerchantAccount.update(
        merchant.customer_id,
        :individual => {
            :first_name => params[:user][:name],
            :last_name => params[:user][:name],
            :email => params[:user][:email],
            :phone => phone_number,
            :date_of_birth => params[:user][:date_of_birth],
            :address => {
                :street_address => params[:user][:shop_attributes][:address],
                :locality => params[:user][:shop_attributes][:city],
                :region => params[:user][:shop_attributes][:state],
                :postal_code => params[:user][:shop_attributes][:zip_code]
            }
        },
        :funding => {
            :destination => Braintree::MerchantAccount::FundingDestination::Bank,
            :email => params[:user][:email],
            :mobile_phone => phone_number,
            :account_number => params[:account_number],
            :routing_number => params[:routing_number]
        })
    if result.success?
      return true
    else
      #@brain_errors = result.errors
      #render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
      #return false
      @brain_errors = result.errors
      result.errors.each { |error| @user.errors.add(" ", error.message) }
      return false
    end
  end


  def disable_merchant
    @user = User.find_by_id(params[:id])
    if @user.update_attributes(:status => params[:status])
      @merchants = User.merchants
      render :partial => "super_admin/merchants/list"
    end
  end


#def merchant_params
#  params.require(:merchant).permit(:name, :parent_id, :parent_type)
#end

  private

  def seed_shop_hours(shop)
    start_time = "8:00 am"
    end_time = "07:00 pm"
    ShopHour.create!(:shop_id => shop.id, :name => 'MONDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'TUESDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'WEDNESDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'THURSDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'FRIDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'SATURDAY', :start_time => start_time, :end_time => end_time, :is_open => true)
    ShopHour.create!(:shop_id => shop.id, :name => 'SUNDAY', :start_time => start_time, :end_time => end_time, :is_open => false)
  end

  def needs_password?(user, params)
    params[:user][:password].present?
  end

  def merchant_params
    params.require(:user).permit(:current_password, :id, :name, :email, :customer_id, :code, :city, :state, :zip, :country, :address, :phone, :zip, :date_of_birth, :password, :password_confirmation, shop_attributes: [:id, :user_id, :name, :phone, :address, :status, :hours, :city, :state, :zip_code, :country])
  end


end
