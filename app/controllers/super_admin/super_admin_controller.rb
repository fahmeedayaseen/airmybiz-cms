class SuperAdmin::SuperAdminController < ApplicationController

  before_filter :authenticate_user!

  before_filter do
    redirect_to root_url unless current_user.super_admin?
  end

end
