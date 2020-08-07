class Event < ApplicationRecord
  belongs_to :space
  has_many :events_performers
  has_many :event_attendees
end
