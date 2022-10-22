class CreateAssignedTos < ActiveRecord::Migration[7.0]
  def change
    create_table :assigned_tos do |t|
      t.integer :parcel_id
      t.integer :parcel_carrier_id
      t.string :time_assigned
      t.string :time_completed

      t.timestamps
    end
  end
end
