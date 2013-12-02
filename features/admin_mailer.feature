Feature: 
	As an administrator of the website
	So I can notify supporters of any upcoming events
	I want to have a mailer to email them

Scenario: A new user signing up receives a welcome email
	When I am on the home page
	And I fill in "Email Signup" with "user@example.com"
	And I press "Sign up"
	Then "user@example.com" should receive an email
