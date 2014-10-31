class EditingReviewsAndImages < ActiveRecord::Migration
  def change
     change_table :images do |t|
      t.string :url
    end

    change_table :reviews do |t|
      t.string :comment
      t.integer :rating
      t.string :email
    end
  end
end
