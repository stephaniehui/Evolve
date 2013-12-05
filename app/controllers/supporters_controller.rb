class SupportersController < ActionController::Base
  before_filter :authenticate_user!, :except => [:create, :new]
  layout :resolve_layout

  def index
    @supporters = Supporter.all
  end

  def show
    @supporter = Supporter.find_by_id(params[:id])
  end

  def create
    supporter = Supporter.create(params[:supporter])
    if supporter.valid?
      flash[:success] = supporter.create_success_text
      if supporter.supportable_type.to_s == 'Supporter'
        redirect_to '/'
      else
        redirect_to :back
      end
    else
      flash[:warning] = supporter.create_failure_text
      flash[:supporter_validation_errors] = supporter.errors.full_messages
      redirect_to :back
    end
  end

  def new
    @supporter = Supporter.new(params[:supporter])
    @supporter.supportable_id = @supporter.id
    @supporter.supportable_type = 'Supporter'
    @page = Page.new(:title => 'Sign Up')
  end

  private

  def resolve_layout
    case action_name
      when 'create'
        'layouts/site'
      when 'new'
        'layouts/site'
      else
        'layouts/admin'
    end
  end

end