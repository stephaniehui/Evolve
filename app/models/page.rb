class Page < ActiveRecord::Base
  has_and_belongs_to_many :blocks
	attr_accessible :path, :title, :published, :content, :content_type, :url, :description

  validates :path, presence: true, uniqueness: true

  validates :title, presence: true

  validates :url, presence: true, uniqueness: true

end
