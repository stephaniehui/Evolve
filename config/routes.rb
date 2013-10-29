Evolve::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users
  resources :users, :page

  if ActiveRecord::Base.connection.tables.include?('pages')
    Page.all.each do |page|
      match page.path, :to => 'page#show', :id => page.id
    end
  end
end
