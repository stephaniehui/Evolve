class EventsController < ActionController::Base
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @events = Event.page params[:page]
  end

  def show
    params[:page] ||= 0
    @event = Event.find_by_id(params[:id])
    @event_supporters = @event.supporters.page(params[:page])
  end

end