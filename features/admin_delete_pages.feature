Feature: Admin should be able to delete pages
 
  As an admin of the website
  So that I can permanently remove static pages
  I can delete pages

Background: a page exists that the admin wants to delete

  Given the following pages exist:
    | title                   | path      | content      | published |
    | Blog1                   | /blog1    | <p>Blog1</p> | true      |
    | Blog2                   | /blog2    | <p>Blog2</p> | false     |

    And I am a new, authenticated user

@javascript
Scenario: The admin can delete a page
  When I am on the page index page
    And I follow "Edit Blog2"
  When I press "Delete page"
    And I confirm popup
  Then I should be on the page index page
    And I should see "Page 'Blog2' was deleted."

