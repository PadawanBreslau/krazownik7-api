Rails.application.routes.draw do
  root 'pages#home'

  resources :challenges, only: [:index, :show]
end
