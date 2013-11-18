class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :name
      t.integer :page_id
      t.string :type

      t.timestamps
    end
    add_column :pages, :form_id, :int
  end
end
