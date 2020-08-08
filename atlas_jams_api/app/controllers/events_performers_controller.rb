class EventsPerformersController < ApplicationController
  def update
    @event_performer = EventsPerformer.find_by(user_id: params[:user_id], event_id: params[:event_id])
    @event_performer.accepted = true
    @event_performer.save
    render json: @event_performer
   
  end

  def destroy
    @event_performer = EventsPerformer.find_by(user_id: params[:user_id], event_id: params[:event_id])
    @event_performer.destroy

  end
end
