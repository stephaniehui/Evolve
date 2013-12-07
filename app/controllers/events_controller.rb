class EventsController < ActionController::Base
  before_filter :authenticate_user!
  load_and_authorize_resource

  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @events = Event.page params[:page]
  end

  def show
    params[:page] ||= 0
    @event = Event.find(params[:id])
    @event_supporters = @event.supporters.page(params[:page])
  end

end