require('factory_girl')

When /I log in as administrator/ do
  redirect_to(admin_page_path)
end

When /I (un)?check the following pages: (.*)/ do |uncheck, pages_list|
  pages_list.split(/,/).each do |r|
    if uncheck
      uncheck(r.strip)
    else
      check(r.strip)
    end
  end
end

Then /(.*) should have attribute (.*)/ do |pagename, attribute|
  # Make sure that the given page has the given attribute
  if attribute == "private"

  # Make sure that the given page has been removed from the database
  elsif attribute == "deleted"

  end
end

Given /^I am not authenticated$/ do
  visit('/users/sign_out') # ensure that at least
end

Given /^I am a new, authenticated user$/ do
  user = FactoryGirl.create(:user, :rand_name, :seq_email, :seq_password)
  user.should be_valid

  visit '/users/sign_in'
  fill_in "user_email", :with => user.email
  fill_in "user_password", :with => user.password
  click_button "Sign in"
end

Then(/^"(.*?)" should not be published$/) do |arg1|
  pending # express the regexp above with the code you wish you had
end

Given /^(?:|I )am on the edit page for (.+)$/ do |page_name|
  @page = Page.find_by_title(page_name)
  visit edit_page_path(@page)
end

When /^I confirm popup$/ do
  page.driver.browser.switch_to.alert.accept    
end

When /^I dismiss popup$/ do
  page.driver.browser.switch_to.alert.dismiss
end

Then(/^"(.*?)" should contain "(.*?)"$/) do |field, labeltext|
    find_field(field).value.should == labeltext
end