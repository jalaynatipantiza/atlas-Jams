class GenreCategoriesController < ApplicationController
  def index
    @genres = GenreCategory.all 
    render json: @genres
  end
  def show
    @genre = GenreCategory.find params[:id]
    render json: @genre
  end
end
