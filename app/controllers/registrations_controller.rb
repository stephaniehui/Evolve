class RegistrationsController < Devise::RegistrationsController
  load_and_authorize_resource

  protected

    def after_update_path_for(resource)
      user_path(resource)
    end

end