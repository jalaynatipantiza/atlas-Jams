class EventsController < ApplicationController
  def index
    @events = Event.all 
    render json: @events
  end
  def show
    @events = EventsPerformer.joins(:event).where(user_id: params[:id]).select('*')

    render json: @events
  end
end
