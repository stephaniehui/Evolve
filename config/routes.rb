Evolve::Application.routes.draw do
  get "petition/index"

  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users, :controllers => { :registrations => :registrations }, :skip => []

  resources :pages, :users
  resources :supporters, only: [:create, :new]
  resources :petitions, only: [:index, :show]
  resources :events, only: [:index, :show]


  # a kludge to work initial pages table creation issues
  if ActiveRecord::Base.connection.tables.include?('pages')
    Page.all.each do |page|
      match page.path, :to => 'pages#show', :id => page.id
    end
  end
  match '/error/404', :to => 'error#not_found_404', :as => :error_404_path
  match '*bad_route', :to => 'error#not_found_404'
end
