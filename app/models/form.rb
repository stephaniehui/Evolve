class Form < ActiveRecord::Base
  belongs_to :page
  has_many :supporters
  attr_accessible :name
end
