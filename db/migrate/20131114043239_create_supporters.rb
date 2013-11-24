class CreateSupporters < ActiveRecord::Migration
  def change
    create_table :supporters do |t|
      t.string :email
      t.integer :supportable_id
      t.string :supportable_type

      t.timestamps
    end
  end
end
