Feature: Playwright Home Page

 
  @test
  Scenario: Check title but fail
    Given I am on Playwright home page
    When I click link "Get started"
    Then I see in title "Installation1"