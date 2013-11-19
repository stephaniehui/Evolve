class SupportersController < ActionController::Base
  def create
    supporter = Supporter.create(params[:supporter])
    if supporter.valid?
      flash[:notice] = "You have successfully signed the petition"
      redirect_to :controller => :pages, :action => :show, :id => Petition.find_by_id(supporter.petition_id).page.id
    else
      flash[:warning] = "You failed to sign the petition."
      flash[:validation_errors] = supporter.errors.full_messages
      redirect_to :controller => :pages, :action => :show, :id => Petition.find_by_id(supporter.petition_id).page.id
    end
  end
end