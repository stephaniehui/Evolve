Feature: Administrators should be able to create new pages

   As an administrator of the website
   So I can make new pages about the political situation
   I want to make new pages

Background: I am logged in as an administrator
  Given I am on the Evolve home page
    And I am a new, authenticated user

  Scenario: If I am logged in I can create a new page and edit the page
    When I am on the page creation page
    When I fill in "Title" with "Proposition 13"
      And I fill in "Path" with "/prop13"
      And I fill in "Content Type:" with "Text"
      And I fill in "Description" with "Details"
      And I press "Create Page"
    Then I should be on the page index page
      And I should see "Successfully created page Proposition 13"
    When I follow "Edit Proposition 13"
    Then I should be on Proposition 13's edit page
      And "Title" should contain "Proposition 13"
      And "Path" should contain "/prop13"
      And "Content Type:" should contain "Text"
      And "Description" should contain "Details"

  Scenario: (Sad path) If page creation fails I am warned
    When I am on the page creation page
      And I fill in "Title" with "Proposition 13"
      And I press "Create Page"
    Then I should be on the page creation page
      And I should see "The following error occurred:"
      And I should see "Path can't be blank"

  Scenario: (Sad path) If I create two pages with the same path it fails
    When I am on the page creation page
      And I fill in "Title" with "Proposition 13"
      And I fill in "Path" with "/prop13"
      And I fill in "Content Type:" with "Text"
      And I fill in "Description" with "Details"
      And I press "Create Page"
    Then I should be on the page index page
      And I should see "Successfully created page Proposition 13"
    When I am on the page creation page
      And I fill in "Title" with "Proposition 13"
      And I fill in "Path" with "/prop13"
      And I fill in "Content Type:" with "Text"
      And I fill in "Description" with "Details"
      And I press "Create Page"
    Then I should be on the page creation page
      And I should see "The following error occurred:"
      And I should see "Path has already been taken"