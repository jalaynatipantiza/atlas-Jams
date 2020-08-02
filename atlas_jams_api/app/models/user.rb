class User < ApplicationRecord
  has_many :spaces
  has_many :events_performers
  has_many :genres
  has_many :recordings
end
