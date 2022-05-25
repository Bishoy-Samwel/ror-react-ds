Rails.application.routes.draw do
  get '*page', to: 'components#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
  
  devise_for :users,
  controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'components#index'

end
