class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from CanCan::AccessDenied do |exception|
    flash[:warning] = 'You are not authorized to access that page.'
    redirect_to request.env['HTTP_REFERER'] ? :back : '/'
  end

end
