class Supporter < ActiveRecord::Base
  belongs_to :petition
  attr_accessible :email, :petition_id
  validates_with EmailValidator, :attr => :email
end
