Feature: Login to Application

    As a valid User
    I want to login into Application

    Scenario: Valid login
     Given I open login page
     When I submit login
     Then I should see homepage
