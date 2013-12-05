class PetitionsController < ActionController::Base
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @petitions = Petition.page params[:page]
  end

  def show
    @petition = Petition.find_by_id(params[:id])
  end

end