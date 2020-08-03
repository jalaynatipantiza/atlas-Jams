class Changepricetype < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :price, :float
  end
end
