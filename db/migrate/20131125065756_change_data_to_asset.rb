class ChangeDataToAsset < ActiveRecord::Migration
  def change
    add_column :ckeditor_assets, :asset_file_name, :string
    add_column :ckeditor_assets, :asset_content_type, :string
    add_column :ckeditor_assets, :asset_file_size, :integer
  end
<<<<<<< HEAD
=======

>>>>>>> a07596c... Setup mailer using gibbon
end
