class EventsController < ApplicationController
  def index
    @events = Event.all 
    render json: @events
  end
  def show

  end
end
