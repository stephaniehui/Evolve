class Form < ActiveRecord::Base
  belongs_to :page
  attr_accessible :name, :page_id
end
