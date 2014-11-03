class Product < ActiveRecord::Base
  validates :name, presence: true

  has_many :images
  has_many :reviews
  belongs_to :category
end
