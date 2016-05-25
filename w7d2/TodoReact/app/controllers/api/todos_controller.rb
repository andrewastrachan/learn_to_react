class Api::TodosController < ApplicationController
  def index
    render json: Todo.all.to_json
  end

  def show
    render json: Todo.find(params[:id]).to_json
  end

  def create
    render json: Todo.create!(todo_params).to_json
  end

  def update
    render json: Todo.update_attributes!(todo_params).to_json
  end

  def destroy
    render json: Todo.destroy!.to_json
  end

  protected
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
