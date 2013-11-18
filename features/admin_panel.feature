Feature: Administrators should be able to use the admin panel to modify certain aspects of the site
Background: I am logged in as an administrator
	Given the following pages exist:
    | title                   | path      | content        | published |
    | Evolve                  | /         | <p>Evolve!</p> | true      |
	And the following files exist:
	| title  | path                       | type | id |
    | Doc1   | http://amazon.com/Doc1.doc | .doc | 1  |
    | Rar1   | http://amazon.com/Rar1.rar | .rar | 2  |
    And I am an administrator

Scenario: I can look at the pages I have created
	Given I am on the Admin Panel page
	Then I should see Pages
	When I press Pages
	Then I should see "Evolve"
	And I should see "Edit 'Evolve'"
	And I should see "Delete 'Evolve'"
	And I should see "Create New Page"

Scenario: I can see the files I have uploaded
	Given I am on the Admin Panel page
	Then I should see Files
	When I press Files
	Then I should see "Doc1"
	And I should see "Delete File"
	
Scenario: I can delete the files I have uploaded
	Given I am on the Files page
	Then I should see "Rar1"
	When I press "Delete Rar1"
	And I confirm popup
	Then I should not see "Rar1"
	
Scenario: I can download the files I have uploaded
	Given I am on the Files page
	Then I should see "Doc1"
	When I follow "Doc1"
	And I confirm popup
	Then I should receive a download with the filename "Doc1.doc"