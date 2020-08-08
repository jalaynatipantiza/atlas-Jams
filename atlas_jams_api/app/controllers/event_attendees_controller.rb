class EventAttendeesController < ApplicationController

  def create
    attendee = EventAttendee.new(attendee_params)

    attendee.save!
  end

  def show
    @attending = EventAttendee.where(user_id: params[:user_id], event_id: params[:event_id])
    # raise @attending.inspect
    render json: @attending
  end

  def destroy
    @attendee = EventAttendee.where(attendee_params)
    raise params[:user_id].inspect
    @attendee.delete
  end

  private

  def attendee_params
    params.require(:event_attendee).permit(:user_id, :event_id)
  end

end
