class AddColumnNameToPages < ActiveRecord::Migration
  def change
    add_column :pages, :content_type, :string
    add_column :pages, :url, :string
    add_column :pages, :description, :string
  end
end
