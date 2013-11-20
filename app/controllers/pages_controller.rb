class PagesController < ActionController::Base
  before_filter :authenticate_user!, :except => [:show]
  layout :resolve_layout

  def index
    @pages = Page.all
  end

  def new
    @page = Page.new(params[:page])
    if params[:page_type] == 'petition'
      @page.build_petition
    end
  end

  def edit
    @page = Page.find(params[:id])
    if params[:page]
      @page.assign_attributes(params[:page])
    end
    #TODO: Add validation for nested formj
  end

  def create
    page = Page.create(params[:page])
    if page.valid?
      flash[:notice] = "Successfully created page #{page.title}"
      redirect_to :action => :index
    else
      flash[:warning] = "Failed to create page."
      flash[:page_validation_errors] = page.errors.full_messages
      redirect_to :action => :new, :params => params
    end
  end

  def show
    @page = Page.find(params['id'])
    if @page.petition
      @supporter = Supporter.new(:petition_id => @page.petition.id)
    end
    if @page.published?
      render 'layouts/site'
    else
      redirect_to :error_404_path
    end
  end

  def update
    @page = Page.find(params['id'])
    @page.update_attributes(params[:page])
    if @page.valid?
      flash[:notice] = "Successfully updated page '#{@page.title}'"
      redirect_to :action => :index
    else
      flash[:warning] = "Failed to update page."
      flash[:page_validation_errors] = @page.errors.full_messages
      redirect_to :action => :edit, :params => params
    end
  end
  
  def destroy
    @page = Page.find(params['id'])
    @page.destroy
    flash[:notice] = "Page '#{@page.title}' was deleted."
    redirect_to :action => :index
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
