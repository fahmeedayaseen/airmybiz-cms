class Users::RegistrationsController < Devise::RegistrationsController

  def new
    build_resource({})
    respond_with self.resource
    #render :layout => false
  end

  def create
    build_resource(sign_up_params)
    if params[:role] == 'merchant'
      resource.roles << Role.find_by_name("driver")
      resource.password = "12345678"
      resource.is_disabled = true
      resource.status = 'in_active'
      if params[:user][:profile_attributes][:phone_type_id].blank?
        resource.errors.add(:driver, "Phone type can't be blank")
        @errors = resource.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
        return
      end
      if params[:user][:profile_attributes][:vehicle_type_id].blank?
        resource.errors.add(:driver, "Vehicle type can't be blank")
        @errors = resource.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
        return
      end
      if resource.save
        render :json => {:success => true, :role => "driver", :user_id => resource.id}
      else
        clean_up_passwords resource
        @errors = resource.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
      end
    else
      resource.roles << Role.find_by_name("customer")
      if resource.save
        yield resource if block_given?
        if resource.active_for_authentication?
          set_flash_message :notice, :signed_up if is_flashing_format?
          sign_up(resource_name, resource)
          #respond_with resource, :location => after_sign_up_path_for(resource)
          UserMailer.welcome_customer(resource, request.protocol, request.host_with_port).deliver
          render :json => {:success => true, :role => "customer", :user_id => resource.id, :url => after_sign_up_path_for(resource)}
        else
          set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
          expire_data_after_sign_in!
          respond_with resource, :location => after_inactive_sign_up_path_for(resource)
        end
      else
        clean_up_passwords resource
        if params[:role] == 'driver'
          if params[:user][:profile_attributes][:phone_type_id].blank?
            resource.errors.add(:phone_type_id, "Phone type can't be blank")
          end
          if params[:user][:profile_attributes][:vehicle_type_id].blank?
            resource.errors.add(:phone_type_id, "Vehicle type can't be blank")
          end
        end
        @errors = resource.errors
        render :json => {:success => false, :html => render_to_string(:partial => '/layouts/errors')}.to_json
        #respond_with resource
      end
    end
  end

  private


end
