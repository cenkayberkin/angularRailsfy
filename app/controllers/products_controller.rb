class ProductsController < ApplicationController
  def index
    # products = Product.includes(:image,:).all
    @products = Product.includes([:images, :reviews]).all
    render 'index.json'
  end
end
