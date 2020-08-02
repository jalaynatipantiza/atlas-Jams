class Event < ApplicationRecord
  belongs_to :space
  has_may :events_performers
end
