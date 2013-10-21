class Page < ActiveRecord::Base
	# this needs to be changed, quite insecure
	attr_accessible :path, :title, :published, :content, :content_type, :url, :description

end
