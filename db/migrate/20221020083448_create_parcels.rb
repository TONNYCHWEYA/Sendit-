class CreateParcels < ActiveRecord::Migration[7.0]
  def change
    create_table :parcels do |t|
      t.string :description
      t.string :recipient_name
      t.integer :recipient_contact
      t.integer :weight
      t.string :from
      t.string :destination
      t.timestamp :time_dispatched

      t.timestamps
    end
  end
end
