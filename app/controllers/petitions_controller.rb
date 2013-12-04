class PetitionsController < ActionController::Base
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    @petitions = Petition.all
  end

  def show
    @petition = Petition.find_by_id(params[:id])
  end

end