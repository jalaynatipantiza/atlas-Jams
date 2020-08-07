Rails.application.routes.draw do

  # root to: '/'

  resources :users
  resources :genre_categories, only: [:index, :show]
  get '/user/:user_id/recordings/' => "recordings#index"
  delete '/recordings/:recording_id' => "recordings#destroy"
  post '/recordings/:user_id/:name/:url/:description' => "recordings#create"
  get '/all/events' => "events#index"

  # We'll need to change this
  get '/user/:id/events' => "events#userEventsPerformer"
  get '/host/:id/events' => "events#userEventsHost"
  get '/event/:id' => "events#show"
  
  get '/spaces/user/:id' => "users#spacesByUser"

  get '/signup' => 'users#new'
  
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
