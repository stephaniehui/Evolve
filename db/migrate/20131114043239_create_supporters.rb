class CreateSupporters < ActiveRecord::Migration
  def change
    create_table :supporters do |t|
      t.string :email
      t.integer :petition_id

      t.timestamps
    end
  end
end
