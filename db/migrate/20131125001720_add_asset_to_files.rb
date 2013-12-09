<<<<<<< HEAD
class AddAssetToFiles < ActiveRecord::Migration
=======
class AddDataToFiles < ActiveRecord::Migration
>>>>>>> a07596c... Setup mailer using gibbon
  def self.up
    add_attachment :pages, :asset
  end

  def self.down
    remove_attachment :pages, :asset
  end

end
