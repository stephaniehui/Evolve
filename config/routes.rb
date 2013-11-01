Evolve::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users
  resources :users, :page

  # a kludge to work initial page table creation issues
  if ActiveRecord::Base.connection.tables.include?('pages')
    get :path=> '/', :controller => 'page', :action => 'show', :id => Page.find_by_path('/')
    Page.all.each do |page|
      if page.published?
        match page.path, :to => 'page#show', :id => page.id
      end
    end
  end
  match '*bad_route', :to => 'errors#routing'
end
