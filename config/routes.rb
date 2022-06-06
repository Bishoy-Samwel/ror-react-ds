Rails.application.routes.draw do
  get 'private/test'

  get 'referral/show'

  get '/current_user', to: 'current_user#index'
  get '*page', to: 'components#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
  
  devise_for :users,
  path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  
  controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'components#index'

end
