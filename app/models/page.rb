class Page < ActiveRecord::Base
  has_and_belongs_to_many :blocks
	attr_accessible :path, :title, :published, :content, :content_type, :url, :description
end
