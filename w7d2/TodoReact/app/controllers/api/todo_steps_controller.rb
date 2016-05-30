class Api::TodoStepsController < ApplicationController
  before_action :find_todo
  def index
    render json: @todo.todo_steps.to_json
  end

  def show
    render json: @todo.todo_steps.find(params[:id]).to_json
  end

  def create
    render json: @todo.todo_steps.create!(todo_step_params).to_json
  end

  def update
    todo_step = @todo.todo_steps.find(params[:id])
    todo_step.update_attributes!(todo_step_params)
    render json: todo_step.to_json
  end

  def destroy
    render json: @todo.todo_steps.find(params[:id]).destroy!.to_json
  end

  protected
  def todo_step_params
    params.require(:todo).permit(:body, :done)
  end

  def find_todo
    @todo = Todo.find(params[:todo_id])
  end
end
