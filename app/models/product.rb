class Product < ActiveRecord::Base
  has_many :images
  has_many :reviews
end
