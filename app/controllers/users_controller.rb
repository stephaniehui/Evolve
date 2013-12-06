class UsersController < ApplicationController
  before_filter :authenticate_user!
  load_and_authorize_resource

  layout 'layouts/admin'

  def index
    params[:page] ||= 0
    @users = User.page params[:page]
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def new
    @user = User.new
    @user.assign_attributes(params[:user])
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:success] = "Successfully created user."
      redirect_to :index
    else
      flash[:warning] = "Failed to create user."
      flash[:user_validation_errors] = @user.errors.full_messages
      redirect_to :new, :params => params
    end
  end

  def edit
    @user = User.find(params[:id])
    @user.assign_attributes(params[:user])
  end

  def update
    @user = User.find(params[:id])
    params[:user].delete(:password) if params[:user][:password].blank?
    params[:user].delete(:password_confirmation) if params[:user][:password].blank? and params[:user][:password_confirmation].blank?
    if @user.update_attributes(params[:user])
      flash[:success] = "Successfully update user."
      redirect_to :index
    else
      flash[:warning] = "Failed to update user."
      flash[:user_validation_errors] = @user.errors.full_messages
      redirect_to :action => :edit, :params => params
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      flash[:success] = "Successfully deleted user"
      redirect_to :back
    end
  end
end
