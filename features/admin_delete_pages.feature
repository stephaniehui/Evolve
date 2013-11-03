Feature: Admin should be able to delete pages
 
  As an admin of the website
  So that I can easily delete a page I've created before
  I want to delete the page 

Background: a page exists that the admin wants to delete

  Given the following pages exist:
    | title                   | path      | content      | published |
    | Blog1                   | /blog1    | <p>Blog1</p> | true      |
    | Blog2                   | /blog2    | <p>Blog2</p> | false     |

  And I am on the Evolve home page

Scenario: delete the page that I am on
  When I press "Delete Blog2"
    And I confirm popup
  Then I should be on the Evolve home page
    And I should see "Page 'Blog2' deleted."

