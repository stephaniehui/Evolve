class Page < ActiveRecord::Base
  has_one :petition, :dependent => :destroy
  has_one :event, :dependent => :destroy
  has_many :supporters, through: :petition
  has_many :supporters, through: :event
  accepts_nested_attributes_for :petition, :event
  attr_accessible :path, :title, :published, :content, :content_type, :description, :petition_attributes, :event_attributes
  validates :path, presence: true, uniqueness: true
  validates :title, presence: true

  def type
    if self.petition
      :petition
    elsif self.event
      :event
    else
      :static
    end
  end

  def is_action?
    self.type != :static
  end

  def type_string
    type = self.type
    if type == :static
      type = :page
    end
    type.capitalize.to_s
  end
end
