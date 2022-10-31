class CreateParcelCarriers < ActiveRecord::Migration[7.0]
  def change
    create_table :parcel_carriers do |t|
      t.integer :employee_code
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
