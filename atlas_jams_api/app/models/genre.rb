class Genre < ApplicationRecord
  belongs_to :user
  belongs_to :genre_Category
end
