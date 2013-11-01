Feature: website static html pages are viewable by supporters

  As a resident of California
  So that I can learn about current political issues in California 
  I want to see static html pages on the Evolve website

Background: static html pages exist that the supporter wants to access
  Given the following pages exist:
    | title                   | path      | content      | published |
    | Blog1                   | /blog1    | <p>Blog1</p> | true      |
    | Blog2                   | /blog2    | <p>Blog2</p> | false     |

Scenario: view public pages
  When I go to the page Blog1
  Then I should see "Blog1"
  When I go to the page Blog2
  Then I should not see "Blog2"
  Then I should see "The page you were looking for doesn't exist."
