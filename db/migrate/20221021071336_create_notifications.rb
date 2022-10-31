class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.integer :order_id
      t.integer :user_id
      t.string :message

      t.timestamps
    end
  end
end
