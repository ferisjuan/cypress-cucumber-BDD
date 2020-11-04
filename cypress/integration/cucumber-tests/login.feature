Feature: Login to Application

    As a valid User
    I want to login into Application

    Scenario: Valid login
     Given I open login page
     When I fill username with "username"
     And I filll password with "password"
     And I click on submit login
     Then I should see homepage
