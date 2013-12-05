class UsersController < ApplicationController
  before_filter :authenticate_user!
  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @users = User.page params[:page]
  end

  def show
    @user = User.find(params[:id])
  end
end
