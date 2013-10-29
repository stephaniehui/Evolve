Feature: website static html pages are viewable by supporters

  As a resident of California
  So that I can learn about current political issues in California 
  I want to see static html pages on the Evolve website

Background: static html pages exist that the supporter wants to access

  Given the following page exists:
    http://www.evolve-ca.org/

Scenario: see the Evolve home page
  When I go the address http://www.evolve-ca.org/
  Then I should be on the home page