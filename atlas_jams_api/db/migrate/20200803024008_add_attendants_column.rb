class AddAttendantsColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :attendants, :integer
  end
end
