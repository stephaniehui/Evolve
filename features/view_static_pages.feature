Feature: website static html pages are viewable by supporters

  As a resident of California
  So that I can learn about current political issues in California 
  I want to see the static html pages on the Evolve website

Background: static html pages exist that the supporter wants to access

  Given the following pages exist:
    http://www.evolve-ca.org/
    http://www.evolve-ca.org/signup
    http://www.evolve-ca.org/donate
    http://www.evolve-ca.org/blog
    http://www.evolve-ca.org/about_us
    http://www.evolve-ca.org/alerts

    Given that I am on the Evolve home page

Scenario: see the Evolve home page
  When I go to the address http://www.evolve-ca.org/
  Then I should see the home page

Scenario: see the email signup page
  When I press "email signup" button
  Then I should see the 'signup' page

Scenario: see the donation page
  When I press "donate" button
  Then I should see the 'donate' page

Scenario: see the blog page
  When I press "blog" button
  Then I should see the 'blog' page

Scenario: see the About Us page
  When I press "about us" button
  Then I should see the 'about_us' page

Scenario: see the Take Action page
  When I press "take action" button
  Then I should see the 'alerts' page
  