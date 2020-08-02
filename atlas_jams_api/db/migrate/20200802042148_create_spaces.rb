class CreateSpaces < ActiveRecord::Migration[6.0]
  def change
    create_table :spaces do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :capacity
      t.string :address

      t.timestamps
    end
  end
end
