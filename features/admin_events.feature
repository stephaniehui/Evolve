Feature: Administrators should be create and delete events

  As an administrator of the website
  So I can notify supporters about events
  Can create event pages

  Background: I am logged in as an administrator
    Given the following pages exist:
      | title                   | path      | content        | published |
      | Evolve                  | /         | <p>Evolve!</p> | true      |
    And I am a new, authenticated user

  Scenario: If I am logged in I can create a new event
    When I am on the page index page
      And I follow "Event"
    When I fill in "Title" with "Event 1"
      And I fill in "Path" with "/event1"
      And I fill in "Event Name:" with "Event 1"
      And I select "2013-05-02T14:11:00Z" as the "page_event_attributes_date" date
      And I fill in "Event Address:" with "2714 Durant Ave, Berkeley CA"
    When I press "Create Event"
    Then I should be on the page index page
      And I should see "Successfully created event Event 1"

  Scenario: (Sad path) If event creation fails I am warned
    When I am on the page index page
      And I follow "Event"
    When I fill in "Title" with "Event 1"
      And I fill in "Path" with "/event1"
      And I fill in "Event Name:" with "Event 1"
      And I select "2013-05-02T14:11:00Z" as the "page_event_attributes_date" date
      And I fill in "Event Address:" with "2714 Durant Ave, Berkeley CA"
    When I press "Create Event"
    Then I should be on the page index page
      And I should see "Successfully created event Event 1"
    When I follow "Event"
      And I fill in "Title" with "Event 2"
      And I fill in "Path" with "/event2"
      And I fill in "Event Name" with "Event 1"
      And I select "2013-05-02T14:11:00Z" as the "page_event_attributes_date" date
      And I fill in "Event Address:" with "2714 Durant Ave, Berkeley CA"
      And I press "Create Event"
    Then I should be on the page creation page
      And I should see "Failed to create event"
      And I should see "The following error occurred:"
      And I should see "Event name has already been taken"
