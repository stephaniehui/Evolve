class SupportersController < ActionController::Base
  layout 'layouts/site'

  def create
    supporter = Supporter.create(params[:supporter])
    if supporter.valid?
      flash[:success] = supporter.create_success_text
      redirect_to :back
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

end