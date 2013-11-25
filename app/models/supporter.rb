class Supporter < ActiveRecord::Base
  belongs_to :supportable, :polymorphic => true
  attr_accessible :email, :supportable_id, :supportable_type
  validates_with EmailValidator, :attr => :email

  def supportable_type=(sType)
    super(sType.to_s.classify.constantize.base_class.to_s)
  end
end
