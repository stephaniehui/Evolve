require 'spec_helper'

describe "Admin" do
  
  describe "Admin page" do

    it "should have the content 'Admin'" do
      visit '/static_pages/contact' #need to figure out what route to put
      expect(page).to have_content('Admin')
    end

    it "should have the title 'Admin Panel'" do
      visit '/static_pages/contact' #need to figure out what route to put
      expect(page).to have_title("Admin Panel") #need to figure out what to put here
    end
  end
end