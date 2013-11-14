class Page < ActiveRecord::Base
  has_one :form
	attr_accessible :path, :title, :published, :content, :content_type, :description
  validates :path, presence: true, uniqueness: true
  validates :title, presence: true
end
