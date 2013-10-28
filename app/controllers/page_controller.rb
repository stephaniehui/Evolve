class PageController < ActionController::Base
  before_filter :authenticate_user!, :except => [:show]

  def index
    @pages = Page.all()
  end

  def new
    @page = Page.new
  end

  def create
    page = Page.create(params[:page])
    if page.nil?
      flash[:failed_to_create_page] = 'Failed to create page.'
    else
      flash[:successfully_created_page] = "Successfully created page #{page.title}"
    end
  end

  def show
    @page = Page.find(params['id'])
    render 'page/show'
  end

  private

  def resolve_layout
    case action_name
      when 'new', 'create', 'index'
        'empty'
      else
        'base'
    end
  end

end
