Evolve::Application.routes.draw do
  resources :page

  Page.all.each do |page|
    match page.url, :to => 'page#show', :id => page.id
  end

end
