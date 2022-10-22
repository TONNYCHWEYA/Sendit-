class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.string :transaction_id
      t.string :description
      t.integer :order_id
      t.string :payment_status

      t.timestamps
    end
  end
end
