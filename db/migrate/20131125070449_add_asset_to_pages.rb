class AddAssetToPages < ActiveRecord::Migration
  def change
    add_column :pages, :asset_file_name, :string
    add_column :pages, :asset_content_type, :string
    add_column :pages, :asset_file_size, :integer
  end
end
