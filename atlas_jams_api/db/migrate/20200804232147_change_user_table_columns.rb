class ChangeUserTableColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :is_performer, :boolean
    add_column :users, :is_performer, :boolean, :default => true
    add_column :users, :is_host, :boolean, :default => true
  end
end
