Feature: Supporters should be able to make donations on the website

  As a resident of California
  So that I can support the Evolve political group
  I want to donate to the group online

Background: I am a supporter
  Given the following pages exist:
    | title                   | path      | content      | published |
    | Evolve!                 | /         | <p>Evolve!</p> | true    |
    | Donate                  | /donate   | <p>Donate</p> | true     |

Scenario: I can make a one-time donation using a credit card
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I select "United States" from "donation_billing_address_country_code"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$500" from "donation_amounts"
   And I select "Credit Card" from "donation_payment_method"
   And I fill in "Credit card number" with "1234567898765432"
   And I fill in "Security code" with "123"
   And I select "2014" from "donation_card_expires_on_1i"
   And I select "1 - January" from "donation_card_expires_on_2i"
   And I select "One Time" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Thank you for your donation!"
   
Scenario: I can make a quarterly donation using EFT
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$250" from "donation_amounts"
   And I select "EFT" from "donation_payment_method"
   And I fill in "Bank Account Number" with "111222333"
   And I fill in "Bank Routing Number" with "444555666"
   And I select "Checking" from "bank_account_type"
   And I select "Quarterly" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Thank you for your donation!"

Scenario: I can set reoccuring donations to be monthly
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$30" from "donation_amounts"
   And I select "Credit Card" from "donation_payment_method"
   And I fill in "Credit card number" with "1234567898765432"
   And I fill in "Security code" with "123"
   And I select "Monthly" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Thank you for your donation!"

Scenario: I can set reoccuring donations to be bi-yearly
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$30" from "donation_amounts"
   And I select "Credit Card" from "donation_payment_method"
   And I fill in "Credit card number" with "1234567898765432"
   And I fill in "Security code" with "123"
   And I select "Bi-yearly" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Thank you for your donation!"

Scenario: (Sad Path) If I fail to fill required fields, I am notified
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   And I fill in "Email" with "supporter@berkeley.edu"
   And I select "$500" from "donation_amounts"
   And I select "Credit Card" from "donation_payment_method"
   And I fill in "Credit card number" with "1234567898765432"
   And I fill in "Security code" with "123"
   And I select "One Time" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "First name can't be blank"
   And I should see "Last name can't be blank"
   And I should see "Billing address address1 can't be blank"
   And I should see "Billing address city can't be blank"
   And I should see "Billing address zip can't be blank"
   And I should see "Billing address phone number can't be blank"

Scenario: (Sad Path) If I input invalid credit card information, I am notified
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$500" from "donation_amounts"
   And I select "Credit Card" from "donation_payment_method"
   And I fill in "Credit card number" with "12345"
   And I fill in "Security code" with "3"
   And I select "One Time" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Card number is not a recognized card type"

Scenario: (Sad Path) If I input invalid EFT information, I am notified
   When I go to the page Donate
   Then I should see "Your Donation Keeps Evolve In Action"
   Then I fill in "First Name" with "Evolve"
   And I fill in "Last Name" with "Supporter"
   And I fill in "Address" with "1234 Evolve Street"
   And I fill in "City" with "Berkeley"
   And I select "California" from "donation_billing_address_state"
   And I fill in "Postal code" with "93410" 
   And I fill in "Email" with "supporter@berkeley.edu"
   And I fill in "Phone" with "(510)333-3333"
   When I select "$250" from "donation_amounts"
   And I select "EFT" from "donation_payment_method"
   And I fill in "Bank Account Number" with "abc"
   And I fill in "Bank Routing Number" with "444555666"
   And I select "Checking" from "Bank Account Type"
   And I select "Quarterly" from "donation_frequency"
   When I press "Process Donation"
   Then I should see "Invalid bank account number"


