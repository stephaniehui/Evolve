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
    if page.valid?
      flash[:notice] = "Successfully created page #{page.title}"
    else
      flash[:warning] = "Failed to create page."
    end
    redirect_to :action => 'index'
  end

  def show
    @page = Page.find(params['id'])
  end

  def edit
    @page = Page.find(params['id'])
  end

  def update
    @page = Page.find(params['id'])
    @page.update_attributes!(params[:page])
    flash[:notice] = "#{@page.title} was successfully updated."
    redirect_to page_path(@page)
  end
  
  def destroy
    @page = Page.find(params['id'])
    @page.destroy
    flash[:notice] = "Page '#{@page.title}' deleted."
    redirect_to :action => 'index'
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
