class Petition < ActiveRecord::Base
  belongs_to :page
  attr_accessible :name
  validates_presence_of :name
  validates_uniqueness_of :name
end
