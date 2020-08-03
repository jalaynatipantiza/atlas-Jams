class Addtimeandchangedatetype < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :date, :string
    add_column :events, :time, :string
    add_column :events, :am, :boolean
  end
end
