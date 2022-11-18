Rails.application.routes.draw do
  root 'pages#home'

  resources :points, only: [:index]
  resources :challenges, only: [:index, :show]

  namespace :api do
    resources :challenges, only: [:index, :show]
    resources :points, only: [:index]
  end
end
