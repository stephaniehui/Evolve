class SupportersController < ActionController::Base
  def create
    supporter = Supporter.create(params[:supporter])
    if supporter.valid?
      flash[:notice] = "You have successfully signed the petition"
      redirect_to :back
    else
      flash[:warning] = "You failed to sign the petition."
      flash[:supporter_validation_errors] = supporter.errors.full_messages
      redirect_to :back
    end
  end
end