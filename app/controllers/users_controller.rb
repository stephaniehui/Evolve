class UsersController < ApplicationController
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end
end
