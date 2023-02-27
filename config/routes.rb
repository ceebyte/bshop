Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'products#index'

  devise_scope :user do
    get 'register', to: 'devise/registrations#new'
    get 'login', to: 'devise/sessions#new'
    get 'logout', to: 'devise/sessions#destroy'
  end

  get '/products', to: "products#index"
  # Defines the root path route ("/")
  # root "articles#index"
end
