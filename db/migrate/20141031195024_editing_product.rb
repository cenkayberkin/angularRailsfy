class EditingProduct < ActiveRecord::Migration
  def change
    change_table :reviews do |t|
      t.belongs_to :product
    end

    change_table :images do |t|
      t.belongs_to :product
    end

    change_table :products do |t|
      t.string :name
      t.string :description
      t.string :shine
      t.string :faces
      t.string :color
      t.integer :price
      t.integer :rarity
    end

  end
end
