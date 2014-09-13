class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :roles_users, :dependent => :destroy
  has_many :roles, :through => :roles_users
  attr_accessible :email, :password, :password_confirmation, :first_name, :last_name


  def customer?
    roles.include?(Role.find_by_name("customer"))
  end

  def self.customers
    User.includes(:roles).where("roles.name" => "customer").order("users.id desc")
  end

  def self.merchants
    User.includes(:roles).where("roles.name" => "merchant")
  end


  def role
    return "super_admin" if super_admin?
    return "customer" if customer?
  end

  def super_admin?
    roles.include?(Role.find_by_name("super_admin"))
  end

  def customer?
    roles.include?(Role.find_by_name("customer"))
  end

  def merchant?
    roles.include?(Role.find_by_name("merchant"))
  end

  def full_name
    "#{name}"
  end


end
