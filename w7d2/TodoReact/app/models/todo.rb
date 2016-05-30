class Todo < ActiveRecord::Base
  validates_presence_of :title, :body
  validates_inclusion_of :done, in: [true, false]

  has_many :todo_steps
end
