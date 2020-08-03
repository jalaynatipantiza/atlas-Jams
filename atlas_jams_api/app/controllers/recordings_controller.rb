class RecordingsController < ApplicationController
  def index
    @recordings = Recording.where({user_id: params[:user_id]})
    render json: @recordings
  end

  def destroy 
    @recording = Recording.find(params[:recording_id])
    @recording.destroy

  end
  def create
    
  end
end
