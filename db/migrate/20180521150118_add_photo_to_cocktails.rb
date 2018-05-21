class AddPhotoToCocktails < ActiveRecord::Migration[5.1]
  def change
    add_column :cocktails, :photo, :string
  end
end
