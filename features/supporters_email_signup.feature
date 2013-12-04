Feature: supporters can sign up for email notifications

  As a resident of California
  So that I can get notified by Evolve
  Can sign up for emails

  Background: An admin has created a user signable petition
    Given the following pages exist:
      | title                   | path      | content           | published |
      | Evolve!                 | /         | <p>Evolve!</p>    | true      |

  Scenario: I should be able to sign up for emails
    When I go to the email sign up page
    Then I should see "Sign Up"
    When I fill in "First Name:" with "Derp"
      And I fill in "Last Name:" with "Derpington"
      And I fill in "Email:" with "herp@derp.com"
      And I fill in "Mobile Phone:" with "555555555"
      And I check "Send me email updates"
      And I fill in "Address:" with "16000 Pensylvania Ave"
    And I press "Sign up"
    Then I should be on the home page
    And I should see "You successfully signed up for emails from Evolve"

  Scenario: (Sad Path) If I enter an improper email I am notified
    When I go to the email sign up page
      Then I should see "Sign Up"
    When I fill in "First Name:" with "Derp"
      And I fill in "Last Name:" with "Derpington"
      And I fill in "Email:" with "notavalidemail"
      And I fill in "Mobile Phone:" with "555555555"
      And I check "Send me email updates"
      And I fill in "Address:" with "16000 Pensylvania Ave"
      And I press "Sign up"
      Then I should be on the email sign up page
        And I should see "The following error occurred"
        And I should see "Email is not valid"
