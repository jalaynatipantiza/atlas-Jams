class Space < ApplicationRecord
  belongs_to :user
  has_many :space_pictures
  has_many :events
end
