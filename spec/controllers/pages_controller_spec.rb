require 'spec_helper'
require 'yaml'
require 'factory_girl'

describe PagesController, :type => :controller do
  before(:each) do
    controller.class.skip_before_filter :authenticate_user!
  end

  describe '#index' do
    it 'should display a list of all pages' do
      Page.stub(:all)
      get 'index'
      response.should render_template 'pages/index'
      #Page.should_receive :all
    end
  end

  describe '#create' do
    it 'should create a pages and add a success message to the flash if valid' do
      params = FactoryGirl.attributes_for(:pages, :published, :static_path, :static_title)
      post :create, :pages => params
      flash[:notice].should_not be_nil
      response.should redirect_to('/pages')
    end
    it 'should add a failure message to the flash if the pages is not valid' do
      params = FactoryGirl.attributes_for(:pages, :published, :static_title)
      post :create, params
      flash[:warning].should_not be_nil
      flash[:page_validation_errors].should_not be_nil
    end
  end

  describe '#show' do
    it 'should show published pages' do
      page = FactoryGirl.create(:pages, :published, :static_path, :static_title)
      get :show, :id => page.id
      response.should render_template 'layouts/site'
    end
    it 'should not show unpublished pages' do
      page = FactoryGirl.create(:pages, :unpublished, :static_path, :static_title)
      get :show, :id => page.id
      response.should redirect_to :error_404_path
    end
  end

  describe '#update' do
    it 'should update a pages values and redirect to the index pages with a success message' do
      page = FactoryGirl.create(:pages, :published, :static_path, :static_title)

    end
  end

  describe '#edit' do
    before(:each) do
      @fake_page = FactoryGirl.create(:pages, :published, :static_path, :static_title)
      @fake_page.should be_valid
      @fake_results = [@fake_page]
      Page.should_receive(:find).with("1").and_return(@fake_page)
    end

    it "should redirect to the edit pages" do
      Page.stub(:find)
      get :edit, {:id => 1}
      response.should render_template 'pages/edit'
    end

    it 'should make the pages info available to the template'
  end

  describe "#delete" do
    it 'should render edit movie template' do
      Page.stub(:find)
      get :edit, {:id => 1}
      response.should render_template 'pages/edit'
    end

    it 'should call a model method to update data' do
      fake_page = double('a pages').as_null_object
      Page.should_receive(:find).and_return(fake_page)
      fake_page.should_receive(:destroy)
      delete :destroy, {:id => 1}
    end
  end
end
