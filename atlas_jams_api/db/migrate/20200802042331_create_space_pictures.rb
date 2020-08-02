class CreateSpacePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :space_pictures do |t|
      t.references :space, null: false, foreign_key: true
      t.string :url

      t.timestamps
    end
  end
end
