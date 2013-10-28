Evolve::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users
  resources :users, :page

  match '/', :to => 'page#show', :id => Page.find_by_path('/').id
  Page.all.each do |page|
    match page.path, :to => 'page#show', :id => page.id
  end

end
