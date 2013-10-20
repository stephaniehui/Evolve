Feature: Admin should be able to delete pages
 
  As an admin of the website
  So that I can easily delete a page I've created before
  I want to delete the page 

Background: a page exists that the admin wants to delete

  Given the page I want to delete exists

  And I am on the edit page 

Scenario: delete the page that I am on
  When I press "delete_page" button
  Then I should see another page that asks me if I am sure I want to delete the page
  Then I press "yes_to_delete" button
  Then I should go back to the home admin page

