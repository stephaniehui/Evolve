class EventsController < ActionController::Base
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

end