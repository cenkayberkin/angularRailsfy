class ProductsController < ApplicationController
  before_action :find_product, only: [:update,:destroy]

  def index
    @products = Product.includes([:images, :reviews]).all
    render 'index.json'
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: product.errors , status: :unprocessable_entity
    end
  end

  def update
    if @product.update_attributes(product_params)
      render json: @product
    else
      render json: @product.errors,status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    render json: { msg: 'success' }
  end

  private
    def product_params
      params.require(:product).permit(:name, :description, :category_id,:faces,:id,:rarity,:color,:price,:shine)
    end

    def find_product
      @product = Product.find(params[:id])
    end
end
