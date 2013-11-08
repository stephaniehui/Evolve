Evolve::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users
  resources :users, :page

  # a kludge to work initial page table creation issues
  if ActiveRecord::Base.connection.tables.include?('pages')
    Page.all.each do |page|
      match page.path, :to => 'page#show', :id => page.id
    end
  end
  match '/error/404', :to => 'error#not_found_404', :as => :error_404_path
  match '*bad_route', :to => 'error#not_found_404'
end
