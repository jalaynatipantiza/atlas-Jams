class EventsController < ApplicationController
  def index
    @events = Event.all 
    render json: @events
  end

  def show
    # Grab event based on id
    # render json
    @event = Event.find_by id: params[:id]

    @space = Space.find_by id: @event.space_id

    @host = User.find_by id: @space.user_id

    @performers = EventsPerformer.joins(:user).where(event_id: @event.id).select('*').as_json(methods: [:my_genres])

    render json: { 'event' => @event, 'performers' => @performers, 'space' => @space, 'host' => @host }
  end

  def create
    raise params.inspect

  end

  def userEventsPerformer
    @events = EventsPerformer.joins(:event).where(user_id: params[:id]).select('*')
    render json: @events
  end

  def userEventsHost
    @spaces = Space.where(user_id: params[:id])
    @events = []
    @arrays = @spaces.map{|space| Event.where(space_id: space.id)}
    @arrays.each{|array| array.each{|event| @events.push(event)}}
    
    render json: @events
  end

  private
  # def eventparams
  #   params.require(:event).permit(:host, :space, :performers)
  # end
end
