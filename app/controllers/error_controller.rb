class ErrorController < ApplicationController
  def not_found_404
    render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
