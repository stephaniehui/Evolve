class Supporter < ActiveRecord::Base
  belongs_to :petition
  attr_accessible :email
end
