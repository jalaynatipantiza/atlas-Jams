class EventsController < ApplicationController
  def index
    @events = Event.includes(:space).includes(:event_attendees).map do |event|
      {
        capacity: event.space.capacity,
        event: event,
        num_of_attendees: event.event_attendees.size
      }
    end

    render json: @events
  end

  def show
    # Grab event based on id
    # render json
    @event = Event.find_by id: params[:id]

    @space = Space.find_by id: @event.space_id

    @host = User.find_by id: @space.user_id

    @performers = EventsPerformer.joins(:user).where(event_id: @event.id).select('*').as_json(methods: [:my_genres])

    render json: { 'event' => @event, 'performers' => @performers, 'space' => @space, 'host' => @host, 'capacity' => @event.space.capacity, 'num_of_attendees' => @event.event_attendees.size }
  end

  def delete
    @event = Event.find_by id: params[:id]
    @event.destroy
    render json: 'Event deleted!'
  end

  def create
    @event  = Event.new(eventparams)
    if @event.save!
      performers = params[:performers]
      performers_official = performers.uniq

      performers_official.each{|performer| EventsPerformer.create({
        user_id: performer,
        event_id: @event.id
      })}
      render json: @event.id
    else
      render json:"didnt work"
    end
  end

  def search
    # puts event_params
    @locations = User.joins(:spaces).where('location LIKE ?', '%' + params[:location] + '%').select('*')
    # @spaces = @locations.joins(:spaces).select('*')
    # raise @locations.inspect

    # raise @locations.inspect
    @events = Event.includes(:space).includes(:event_attendees).includes(:users).where(params[:location]).map do |event|
      {
        # location: event.space.user.location,
        capacity: event.space.capacity,
        event: event,
        num_of_attendees: event.event_attendees.size
      }
    end
    puts @events.inspect
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

  def eventparams
    params.require(:event).permit(:space_id, :date, :duration, :name, :price, :description,:time, :am, :attendants, :event_picture)
  end

end
