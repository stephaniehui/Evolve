Feature: Administrators should be able to mark pages as published or unpublished

  As an administrator of the website
  So I can selectively show pages
  I want to make new pages

  Background: I am logged in as an administrator

  Scenario: Make a new page which is published
    When I am on the page creation page
    Then I should see "Title:" before "Path:"
    And I fill in "Title" with "Proposition 13"
    And I fill in "Path" with "prop13"
    And I fill in "Content Type:" with "Text"
    And I fill in "Description" with "Details"
    And I press "Create Page"
    Then I should be on page index page
    And I should see "Successfully created page Proposition 13"