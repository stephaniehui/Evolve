class SupportersController < ActionController::Base
  def create
    supporter = Supporter.create(params[:supporter])
    if supporter.valid?
      flash[:notice] = "You have successfully signed the petition"
      redirect_to :back
    else
      flash[:warning] = "You failed to sign the petition."
      flash[:validation_errors] = supporter.errors.full_messages
      redirect_to :controller => :pages, :action => :show, :id => supporter.petition.page.id
    end
  end
end