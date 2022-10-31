class CreateParcelCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :parcel_categories do |t|
      t.string :type

      t.timestamps
    end
  end
end
