class RenameGenresCategory < ActiveRecord::Migration[6.0]
  def change
    rename_column :genres, :genre_categories_id, :genre_category_id
  end
end
