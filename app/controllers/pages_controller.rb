class PagesController < ActionController::Base
  before_filter :authenticate_user!, :except => [:show]
  load_and_authorize_resource
  layout :resolve_layout

  def index
    params[:page] ||= 0
    @pages = Page.page params[:page]
  end

  def new
    @page = Page.new(params[:page])
    if params[:page_type] == 'petition'
      @page.build_petition
    elsif params[:page_type] == 'event'
      @page.build_event
    end
  end

  def edit
    @page = Page.find(params[:id])
    if params[:page]
      @page.assign_attributes(params[:page])
    end
  end

  def create
    page = Page.new(params[:page])
    if page.save
      flash[:success] = "Successfully created #{page.type_string.downcase} #{page.title}"
      redirect_to :action => :index
    else
      flash[:warning] = "Failed to create #{page.type_string.downcase} #{page.title}"
      flash[:page_validation_errors] = page.errors.full_messages
      redirect_to :action => :new, :params => params
    end
  end

  def show
    @page = Page.find(params['id'])
    if @page.petition
      @supportable = @page.petition
      @supporter = Supporter.new(:supportable_id =>@supportable.id, :supportable_type => :petition)
    elsif @page.event
      @supportable = @page.event
      @supporter = Supporter.new(:supportable_id => @supportable.id, :supportable_type => :event)
    end

    if @page.published?
      render 'pages/_content'
    else
      redirect_to :error_404_path
    end
  end

  def update
    if can? :update, Page
      @page = Page.find(params['id'])
      @page.update_attributes(params[:page])
      if @page.valid?
        flash[:success] = "Successfully updated #{@page.type_string.downcase} '#{@page.title}'"
        redirect_to :action => :index
      else
        flash[:warning] = "Failed to update #{@page.type_string.downcase}."
        flash[:page_validation_errors] = @page.errors.full_messages
        redirect_to :action => :edit, :params => params
      end
    end
  end

  def destroy
    @page = Page.find(params['id'])
    @page.destroy
    flash[:success] = "#{@page.type_string} '#{@page.title}' was deleted."
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
