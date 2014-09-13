class SuperAdmin::DashboardController < SuperAdmin::SuperAdminController
  #before_filter :set_partner, :except => [:create]
  layout "super_admin"

  def index
    @stores = User.merchants.size
    @new_stores = User.merchants.where("Date(users.created_at) > ?", Date.today - 7.day).size
    @customers = User.customers.size
    @new_customers = User.customers.where("Date(users.created_at) > ?", Date.today - 7.day).size

  end

end
