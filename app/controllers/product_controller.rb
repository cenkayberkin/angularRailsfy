class ProductController < ApplicationController
  def index
    # products = Product.includes(:image,:).all
    products = Product.includes([:images, :reviews]).all
    # active model seriliser
    render json: products
  end
end
