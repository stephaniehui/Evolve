class AddAttachmentFileToPages < ActiveRecord::Migration
  def self.up
    change_table :pages do |t|
      t.attachment :file
    end
  end

  def self.down
    drop_attached_file :pages, :file
  end
end
