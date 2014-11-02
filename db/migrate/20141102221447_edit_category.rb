class EditCategory < ActiveRecord::Migration
  def change
    change_table :products do |t|
      t.belongs_to :category
    end

    change_table :categories do |t|
      t.string :name
    end
  end
end
