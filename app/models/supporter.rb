class Supporter < ActiveRecord::Base
  belongs_to :supportable, :polymorphic => true
  attr_accessible :email, :supportable_id, :supportable_type
  validates_with EmailValidator, :attr => :email
  #TODO: Fix supporter cleanup on page deletion
end
