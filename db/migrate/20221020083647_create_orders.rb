class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :parcel_id
      t.string :order_status

      t.timestamps
    end
  end
end
