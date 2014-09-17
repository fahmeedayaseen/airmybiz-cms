class Category < ActiveRecord::Base
  has_many :sub_categories, :as => :parent, :class_name => "Category", :dependent => :destroy
  validates :name, :presence => true
  belongs_to :parent, :polymorphic => true

end
