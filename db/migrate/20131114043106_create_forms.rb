class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :name
      t.integer :page_id

      t.timestamps
    end
  end
end
