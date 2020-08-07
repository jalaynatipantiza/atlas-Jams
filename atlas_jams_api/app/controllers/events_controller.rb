class EventsController < ApplicationController
  def index
    @events = Event.all 
    render json: @events
  end

  def show
    # Grab event based on id
    # render json

    # @events = EventsPerformer.joins(:event).where(user_id: params[:id]).select('*')

    @event = Event.find_by id: params[:id]

    # render json: @events, @performers, @host

    @space = Space.find_by id: @event.space_id

    @host = User.find_by id: @space.user_id

    # @events_performers = EventsPerformer.find_by event_id: @event.id

    @performers = EventsPerformer.joins(:user).where(event_id: @event.id).select('*')

    # render json: @performers
    render json: { 'event' => @event, 'performers' => @performers, 'space' => @space, 'host' => @host }

    render json: @events
  end

  def userEvents
    @events = EventsPerformer.joins(:event).where(user_id: params[:id]).select('*')
    render json: @events
  end
end
