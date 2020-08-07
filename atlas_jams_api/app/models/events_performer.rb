class EventsPerformer < ApplicationRecord
  belongs_to :event
  belongs_to :user

  def my_genres
    user.genres.map{|x| x.genre_category.name}
  end
end
