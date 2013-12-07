class AddFieldsToSupporters < ActiveRecord::Migration
  def change
    add_column :supporters, :name_first, :string
    add_column :supporters, :name_last, :string
    add_column :supporters, :phone_mobile, :integer
    add_column :supporters, :address, :string
    add_column :supporters, :updates_email, :boolean
    add_column :supporters, :updates_mobile, :boolean
    add_column :supporters, :volunteer, :boolean
  end
end
