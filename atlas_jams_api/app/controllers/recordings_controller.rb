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
    @recording = Recording.new(recording_params)

    if @recording.save
      render json: "new recording has been saved"
    else
      render json: "could not save"
    end
  end


  private

  def recording_params
    params.require(:recording).permit(
      :name,
      :url,
      :description,
    )
  end
end
