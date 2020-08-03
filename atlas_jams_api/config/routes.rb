Rails.application.routes.draw do
  resources :users
  resources :genre_categories, only: [:index, :show]
  get '/user/:user_id/recordings/' => "recordings#index"
  delete '/recordings/:recording_id' => "recordings#destroy"
  create '/recordings/:recording_id' => "recordings#destroy"
  
end

