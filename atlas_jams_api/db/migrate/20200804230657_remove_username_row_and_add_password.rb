class RemoveUsernameRowAndAddPassword < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :password, :string
    add_column :users, :is_host, :boolean, :default => false
    change_column :users, :is_performer, :boolean, :default => false
    remove_column :users, :username, :string
  end
end
