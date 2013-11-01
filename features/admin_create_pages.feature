Feature: Administrators should be able to create new pages

   As an administrator of the website
   So I can make new pages about the political situation
   I want to make new pages

Background: I am logged in as an administrator
  Given I am on the Evolve home page
  Given I am a new, authenticated user
  Then I should be on the Evolve home page

  Scenario: If I am logged in I can create a new page
    When I am on the page creation page
    Then I should see "Title:" before "Path:"
    And I fill in "Title" with "Proposition 13"
    And I fill in "Path" with "/prop13"
    And I fill in "Content Type:" with "Text"
    And I fill in "Description" with "Details"
    And I press "Create Page"
    Then I should be on the page index page
    And I should see "Successfully created page Proposition 13"

  Scenario: (Sad path) If page creation fails I am warned
    When I am on the page creation page
    And I fill in "Title" with "Proposition 13"
    And I press "Create Page"
    Then I should be on the page index page
    And I should see "Failed to create page."