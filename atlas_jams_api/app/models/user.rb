class User < ApplicationRecord

  has_secure_password
  validates :email, presence: true,  uniqueness: { case_sensitive: false }
  validates :password_confirmation, presence: true, length: { minimum: 5 }

  has_many :spaces
  has_many :events_performers
  has_many :genres
  has_many :genre_categories, through: :genres
  has_many :recordings
  has_many :event_attendees

  # def my_genres
  #   user.genres.map{|x| x.genre_category.name}
  # end
end
