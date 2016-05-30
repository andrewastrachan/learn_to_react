class Api::TodoStepsController < ApplicationController
  before_action :find_todo
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  protected
  def todo_step_params
    params.require(:todo).permit(:body, :done)
  end

  def find_todo
    @todo = Todo.find(params[:todo_id])
  end
end
