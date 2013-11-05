Feature: Admin should be able to mark pages as private
  As an admin of the website
  So that I can remove pages from being seen by the public
  I want to mark the pages as private

Background: I am logged in as administrator and pages exist
   Given the following pages exist:
    | title                   | path      | content      | published |
    | Blog1                   | /blog1    | <p>Blog1</p> | true      |
    | Blog2                   | /blog2    | <p>Blog2</p> | false     |
    | Blog3                   | /blog3    | <p>Blog3</p> | true      |
      And I am on the Evolve home page
      And I am an authenticated user

Scenario: Mark pages as private/unviewable
  When I check the following pages: "Blog3"
  And I press "Make Private"
  Then "Blog3" should not be published


