Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :todos, only: [:index, :show, :create, :update, :destroy] do
      resources :todo_steps, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
