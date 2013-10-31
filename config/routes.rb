Evolve::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  devise_for :users
  resources :users, :page

  # a kludge to work initial page table creation issues
  if ActiveRecord::Base.connection.tables.include?('pages')
    Page.all.each do |page|
      if page.published?
        match page.path, :to => 'page#show', :id => page.id
      end
    end
  end
end
