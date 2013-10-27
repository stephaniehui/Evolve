class PageController < ActionController::Base

  def new
    render 'page/new'
  end

  def create
    page = Page.create(params[:page])
    if page.nil?
      flash[:failed_to_create_user] = 'Failed to create user.'
    end
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
