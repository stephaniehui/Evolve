require 'spec_helper'
require 'yaml'
require 'factory_girl'

describe Page, :type => :model do
  describe "#new" do
    it "creates a page given a title and path" do
      FactoryGirl.build(:page, :static_path, :static_title).should be_valid
    end

    it "creates multiple pages with different paths" do
      page1 = FactoryGirl.create(:page, :published, :seq_path, :seq_title)
      page2 = FactoryGirl.build(:page, :published, :seq_path, :seq_title)
      page1.should be_valid
      page2.should be_valid
    end

    it "doesn't create a page with a duplicate path" do
      page1 = FactoryGirl.create(:page, :published, :static_path, :seq_title)
      page2 = FactoryGirl.build(:page, :published, :static_path, :seq_title)
      page1.should be_valid
      page2.should_not be_valid
    end
  end
end
