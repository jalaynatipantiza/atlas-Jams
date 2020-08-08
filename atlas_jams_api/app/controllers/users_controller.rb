class UsersController < ApplicationController
  def index 
    @users= User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end
  def spacesByUser
    @spaces = Space.joins(:space_pictures).where(user_id: params[:id]).select("*");
    render json: @spaces
  end

  def new
  end

  def performers
    @performers = User.all.where(is_performer: true)
    render json: @performers
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: 200

    else
      render json: { error: user.errors.full_messages}, status: 400
    end
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :number, :location, :genre, :is_performer, :is_host)
  end
  
end
