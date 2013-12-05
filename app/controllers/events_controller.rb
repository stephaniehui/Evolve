class EventsController < ActionController::Base
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @events = Event.page params[:page]
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

end