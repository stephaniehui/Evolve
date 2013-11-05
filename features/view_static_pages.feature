Feature: website static html pages are viewable by supporters

  As a resident of California
  So that I can learn about current political issues in California 
  I want to see published static html pages on the Evolve website

Background: static html pages exist that the supporter wants to access
  Given the following pages exist:
    | title                   | path      | content      | published |
    | Evolve!                 | /         | <p>Evolve!</p> | true    |
    | Blog1                   | /blog1    | <p>Blog1</p> | true      |
    | Blog2                   | /blog2    | <p>Blog2</p> | false     |

Scenario: I should be able to view public pages
  When I go to the page Blog1
  Then I should see "Blog1"

Scenario: I should not be able to view unpublished pages
  When I go to the page Blog2
  Then I should not see "Blog2"
  Then I should see "The page you were looking for doesn't exist."

Scenario: When I change a page to published I should be able to view it
  When I am a new, authenticated user
    And I go to the page index page
    And I follow "Edit Blog2"
    And I check "page_published"
    And I press "Update Page"
    Then I should be on the page index page
  When I go to the page Blog2
    Then I should see "Blog2"


