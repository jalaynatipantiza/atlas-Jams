class User < ApplicationRecord

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true,  uniqueness: { case_sensitive: false }
  validates :password_confirmation, presence: true, length: { minimum: 5 }

  has_many :spaces
  has_many :events_performers
  has_many :genres
  has_many :recordings
end
