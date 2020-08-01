class Users < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |user|
      user.string :name
      user.string :email
      user.string :number
      user.string :profile_pic
      user.string :description
      user.string :username
      user.string :city
      user.boolean :is_performer
      user.integer :size
    end
  end
end
