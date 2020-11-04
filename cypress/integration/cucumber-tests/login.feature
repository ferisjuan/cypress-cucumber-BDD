Feature: Login to Application

  As an invalid user
  I cannot log into the application

  Scenario: Invalid Login
    Given I open login page
    When I fill username with "invalid username"
    And I filll password with "invalid password"
    And I click on submit login
    Then I should see an error message

  As a valid user
  I want to login into Application

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    And I filll password with "password"
    And I click on submit login
    Then I should see homepage


