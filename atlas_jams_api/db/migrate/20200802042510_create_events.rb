class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.references :space, null: false, foreign_key: true
      t.datetime :date
      t.string :duration
      t.string :name
      t.decimal :price
      t.text :description

      t.timestamps
    end
  end
end
