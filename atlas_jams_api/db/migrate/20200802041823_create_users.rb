class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :number
      t.string :profile_pic
      t.text :description
      t.string :username
      t.string :location
      t.boolean :is_performer
      t.integer :size

      t.timestamps
    end
  end
end
