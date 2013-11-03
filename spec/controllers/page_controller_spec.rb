require 'spec_helper'
require 'yaml'
require 'factory_girl'

describe PageController, :type => :controller do
  before(:each) do
    controller.class.skip_before_filter :authenticate_user!
  end
  describe "#edit" do
    before(:each) do
      @fake_page = FactoryGirl.create(:page, :published, :static_path, :static_title)
      @fake_page.should be_valid
      @fake_results = [@fake_page]
      Page.should_receive(:find).with("1").and_return(@fake_page)
    end

    it "should redirect to the edit page" do
      Page.stub(:find)
      get :edit, {:id => 1}
      response.should render_template 'edit'
    end

    it 'should make the page info available to the template'
  end

  describe "#delete" do
    it 'should render edit movie template' do
      Page.stub(:find)
      get :edit, {:id => 1}
      response.should render_template 'edit'
    end
      
    it 'should call a model method to update data' do
      fake_page = double('a page').as_null_object
      Page.should_receive(:find).and_return(fake_page)
      fake_page.should_receive(:destroy)
      delete :destroy, {:id => 1}
    end
  end
end
