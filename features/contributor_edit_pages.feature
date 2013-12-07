Feature: Contributors should be able to edit existing pages

  As a contributor to the website
  So I can make changes to existing pages
  I can update a page's fields

  Background: I am logged in as a contributor
    Given the following pages exist:
      | title                   | path      | content        | published |
      | Evolve                  | /         | <p>Evolve!</p> | true      |
      | Blog1                   | /blog1    | <p>Blog1</p>   | true      |
      | Blog2                   | /blog2    | <p>Blog2</p>   | true      |
      And the following roles exist:
        | name        |
        | Admin       |
        | Contributor |
      And I am a new, authenticated "Contributor"

  Scenario: I can create a new page and edit the page
    When I am on the page index page
      And I follow "Edit Blog1"
      Then I should be on Blog1's edit page
    When I fill in "Content:" with "Changed Field"
      And I press "Update Page"
      And I follow "View Blog1"
      Then I should see "Changed Field"

  Scenario: (Sad Path) If I try to submit invalid values updating fails with an explanation
    When I am on the page index page
      And I follow "Edit Blog1"
      Then I should be on Blog1's edit page
    When I fill in "Path:" with "/blog2"
      And I press "Update Page"
      Then I should be on Blog1's edit page
     When I am on the page index page
      And I follow "View Blog1"
      Then I should see "Blog1"