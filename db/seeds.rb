# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#ActionController::Parameters.permit_all_parameters = true
#params = ActionController::Parameters.new({
#                                              user: {
#                                                  :email => "super_admin@airmybiz.com",
#                                                  :password => "12345678",
#                                                  :password_confirmation => "12345678"
#                                              }
#                                          })


def create_user
  puts "Deleting existing roles..."
  roles = Role.all
  roles.each { |role| role.destroy } if roles.present?

  puts "Creating roles..."
  %w(super_admin customer driver).each do |name|
    Role.create!(:name => name)
  end

  puts "Deleting existing users.."
  users = User.all
  users.each { |user| user.destroy } if users.present?

  puts "Creating default super super_admin ...."
  super_admin = User.new(:email => "super_admin@airmybiz.com",
                         :password => "12345678",
                         :password_confirmation => "12345678",
                         :first_name => "Super",
                         :last_name => "Admin",
  )
  super_admin.roles << Role.find_by_name("super_admin")
  super_admin.save!
end

create_user
