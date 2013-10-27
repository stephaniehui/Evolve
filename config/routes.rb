Evolve::Application.routes.draw do
  authenticated :user do
    root :to => 'page#show'
  end
  devise_for :users
  resources :page, :users

  Page.all.each do |page|
    match page.url, :to => 'page#show', :id => page.id
  end

end
