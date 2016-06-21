class Track < ActiveRecord::Base
  validates_presence_of :name, :roll
end
