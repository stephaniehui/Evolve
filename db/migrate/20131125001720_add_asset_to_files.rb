class AddAssetToFiles < ActiveRecord::Migration
  def self.up
    add_attachment :pages, :asset
  end

  def self.down
    remove_attachment :pages, :asset
  end

end
