class Petition < ActiveRecord::Base
  belongs_to :page
  has_many :supporters, :as => :supportable, :dependent => :destroy
  attr_accessible :name
  validates_presence_of :name
  validates_uniqueness_of :name

  def submit_text
    "Sign Petition"
  end

end
