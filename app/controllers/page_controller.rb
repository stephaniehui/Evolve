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
      flash[:warning] = "Failed to create page."
    else
      flash[:notice] = "Successfully created page #{page.title}"
    end
    redirect_to :action => 'index'
  end

  def show
    @page = Page.find(params['id'])
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
