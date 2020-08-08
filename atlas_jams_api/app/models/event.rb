class Event < ApplicationRecord
  belongs_to :space
  has_many :events_performers, dependent: :delete_all
  has_many :event_attendees, dependent: :delete_all
end
