Feature: Contributors should be create and delete petitions

  As a contributor of the website
  So I can make gather emails for a cause
  I can create signable petitions

  Background: I am logged in as a contributor
    Given the following pages exist:
      | title                   | path      | content        | published |
      | Evolve                  | /         | <p>Evolve!</p> | true      |
    And the following roles exist:
      | name        |
      | Admin       |
      | Contributor |
    And I am a new, authenticated "Contributor"

  Scenario: If I am logged in I can create a new petition
    When I am on the page index page
      And I follow "Petition"
    When I fill in "Title" with "Petition 1"
      And I fill in "Path" with "/pet1"
      And I fill in "Petition Name" with "Petition 1"
    When I press "Create Petition"
    Then I should be on the page index page
      And I should see "Successfully created petition Petition 1"

  Scenario: (Sad path) If petition creation fails I am warned
    When I am on the page index page
      And I follow "Petition"
    When I fill in "Title" with "Petition 1"
      And I fill in "Path" with "/pet1"
      And I fill in "Petition Name" with "Petition 1"
    When I press "Create Petition"
    Then I should be on the page index page
      And I should see "Successfully created petition Petition 1"
    When I follow "Petition"
      And I fill in "Title" with "Petition 1"
      And I fill in "Path" with "/pet2"
      And I fill in "Petition Name" with "Petition 1"
      And I press "Create Petition"
    Then I should be on the page creation page
      And I should see "Failed to create petition"
      And I should see "The following error occurred:"
      And I should see "Petition name has already been taken"

