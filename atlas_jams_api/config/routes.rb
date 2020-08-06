Rails.application.routes.draw do

  # root to: '/'

  resources :users
  resources :genre_categories, only: [:index, :show]
  get '/user/:user_id/recordings/' => "recordings#index"
  delete '/recordings/:recording_id' => "recordings#destroy"
  post '/recordings/:user_id/:name/:url/:description' => "recordings#create"
  get '/all/events' => "events#index"
  get '/event/:id' => "events#show"
  


  get '/signup' => 'users#new'
  
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
