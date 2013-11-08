class PageController < ActionController::Base
  before_filter :authenticate_user!, :except => [:show]
  layout :resolve_layout

  def index
    @pages = Page.all()
  end

  def new
    @page = Page.new
    @page_method = :create
    render 'page/update'
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
    if @page.published?
      render 'layouts/site'
    else
      redirect_to :error_404_path
    end
  end

  def edit
    @page = Page.find(params['id'])
    @page_method = :update
    render 'page/update'
  end

  def update
    @page = Page.find(params['id'])
    @page.update_attributes!(params[:page])
    flash[:notice] = "Successfully updated page '#{@page.title}'"
    redirect_to :action => 'index'
  end
  
  def destroy
    @page = Page.find(params['id'])
    @page.destroy
    flash[:notice] = "Page '#{@page.title}' was deleted."
    redirect_to :action => 'index'
  end

  private

  def resolve_layout
    case action_name
      when 'show'
        'layouts/site'
      else
        'layouts/admin'
    end
  end
end
