class Event < ActiveRecord::Base
  belongs_to :page
  has_many :supporters, :as => :supportable, :dependent => :destroy
  attr_accessible :date, :location, :name
  validates_presence_of :date, :location, :name
  validates_uniqueness_of :name

  def submit_text
    "I'm Attending"
  end

end
