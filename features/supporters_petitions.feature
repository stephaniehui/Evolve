Feature: website static html pages are viewable by supporters

  As a resident of California
  So that I can support certain causes
  Can sign relevant petitions

  Background: An admin has created a user signable petition
    Given the following pages exist:
      | title                   | path      | content           | published |
      | Evolve!                 | /         | <p>Evolve!</p>    | true      |
    Given I am a new, authenticated user
    When I am on the page index page
      And I follow "Add new petition"
    When I fill in "Title" with "Petition1"
      And I fill in "Path" with "/pet1"
      And I fill in "Content:" with "This is a petition"
      And I check "Published"
      And I fill in "Petition Name" with "Petition1"
    When I press "Create Page"
    Then I should be on the page index page
    Then I log out

  Scenario: I should be able to view and sign public petitions
    When I go to the page Petition1
    Then I should see "This is a petition"
    And I should see "Email:"
    When I fill in "Email:" with "derp@derp.com"
    And I press "Sign Petition"
    Then I should be on the page Petition1
    And I should see "You have successfully signed the petition"

  Scenario: (Sad Path) If I enter an improper email I am notified
    When I go to the page Petition1
    Then I should see "This is a petition"
      And I should see "Email:"
    When I fill in "Email:" with "derp"
      And I press "Sign Petition"
    Then I should be on the page Petition1
      And I should see "You failed to sign the petition."
      And I should see "The following error occurred:"
      And I should see "Email is not valid"
