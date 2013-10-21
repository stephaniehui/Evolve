class PageController < ActionController::Base
  layout 'application'

  def show
    @page = Page.create :title => "Derpy title",
                        :content => "Derpy content",
                        :description => "A page description",
                        :url => "http://thispage.com",
                        :content_type => "article"
    @partials = ['page/partials/page_features', 'page/partials/content']
    render 'page/show'
  end

end
