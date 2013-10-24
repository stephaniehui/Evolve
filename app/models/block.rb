class Block < ActiveRecord::Base
  # this may need to change to has_many :through ... depending on organizational changes
  has_and_belongs_to_many :pages
  attr_accessible :content
end
