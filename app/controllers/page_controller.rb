class PageController < ActionController::Base

  def new
    render 'page/new'
  end

  def create
    page = Page.create(params[:page])
    if page.nil?
      flash[:success?] = false
    else
      flash[:success?] = true
    end
    render
  end

  def show
    @page = Page.find(params['id'])
    # obviously this needs to change
    @partials = []
    render 'page/show'
  end

  private

  def resolve_layout
    case action_name
      when 'new', 'create'
        'empty'
      else
        'application'
    end
  end

end
