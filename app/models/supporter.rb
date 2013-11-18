class Supporter < ActiveRecord::Base
  belongs_to :form
  attr_accessible :email
end
