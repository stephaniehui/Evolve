class ChangeDataToAsset < ActiveRecord::Migration
  def change
    add_column :ckeditor_assets, :asset_file_name, :string
    add_column :ckeditor_assets, :asset_content_type, :string
    add_column :ckeditor_assets, :asset_file_size, :integer
  end
end
