Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api do
    resources :tracks
  end
end
