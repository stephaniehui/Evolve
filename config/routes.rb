Evolve::Application.routes.draw do
  resources :pages

  Page.all.each do |page|
    match page.url, :to => 'page#show', :id => page.id
  end

end
