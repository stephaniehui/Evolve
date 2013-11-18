# spec/controllers/admin/admin_spec.rb

it "accesses the admin panel" do
  user = FactoryGirl.create_or_return_admin_user

  visit '/users/sign_in'
  fill_in "user_email", :with => user.email
  fill_in "user_password", :with => user.password
  click_button "Sign in"


  current_path.should eq admin_panel_path
  within 'h1' do
    page.should have_content 'Administration'
  end
  page.should have_content 'Manage Pages'
  page.should have_content 'Manage Files'
end