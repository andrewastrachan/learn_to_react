class TodoStep < ActiveRecord::Base
  validates_presence_of :body
  validates_inclusion_of :done, in: [true, false]
end
