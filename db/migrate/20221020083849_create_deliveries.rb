class CreateDeliveries < ActiveRecord::Migration[7.0]
  def change
    create_table :deliveries do |t|
      t.string :recipient_name
      t.timestamp :reception_time
      t.integer :order_id
      t.integer :bill_id

      t.timestamps
    end
  end
end
