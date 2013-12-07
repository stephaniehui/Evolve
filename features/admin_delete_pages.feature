Feature: Admin should be able to delete pages
 
  As an admin of the website
  So that I can permanently remove static pages
  I can delete pages

Background: A page exists that the user wants to delete
  Given the following pages exist:
    | title                   | path      | content         | published |
    | Evolve                  | /         | <p>Evolve!</p>  | true      |
    | Blog1                   | /blog1    | <p>Blog1</p>    | true      |
    | Blog2                   | /blog2    | <p>Blog2</p>    | false     |
  And the following roles exist:
    | name        |
    | Admin       |
    | Contributor |

  @javascript
  Scenario: Admin users can delete a page
    Given I am a new, authenticated "Admin"
    When I am on the page index page
      And I follow "Edit Blog2"
    When I press "Delete Page"
      And I confirm popup
    Then I should be on the page index page
      And I should see "Page 'Blog2' was deleted."

#TODO: fails when both are run - bad news bears
  @javascript
  Scenario: Contributor users can delete a page
    Given I am a new, authenticated "Contributor"
    When I am on the page index page
    And I follow "Edit Blog2"
    When I press "Delete Page"
    And I confirm popup
    Then I should be on the page index page
    And I should see "Page 'Blog2' was deleted."

