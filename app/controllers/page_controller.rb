class PageController < ActionController::Base
  layout 'application'

  def show
    @page = Page.find(params['id'])
    @partials = []
    render 'page/show'
  end

end
