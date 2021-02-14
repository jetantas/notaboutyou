Feature: Login

    I want to validate the Login feature scenarios

    Scenario: User is Logged In
        Given I navigate to the home page
        And I navigate to the login page
        When I enter
            | email | password |
            | gtantas@gmail.com | password! |
        And I click on register button
        Then I should be logged in
     
    Scenario: User is Logged Out
        When I click on logout button
        Then I should be logged out