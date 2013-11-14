class Supporter < ActiveRecord::Base
  belongs_to :petition
  attr_accessible :email, :form_id, :name
end
