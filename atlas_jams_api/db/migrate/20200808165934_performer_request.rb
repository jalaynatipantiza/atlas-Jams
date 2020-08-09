class PerformerRequest < ActiveRecord::Migration[6.0]
  def change
    add_column :events_performers, :accepted, :boolean, :default => false
  end
end
