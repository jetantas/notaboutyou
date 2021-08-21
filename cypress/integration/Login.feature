Feature: Login

    I want to validate the Signup feature scenarios

    Scenario: User is Signed Up
        Given I navigate to the home page
        And I go to sign up page
        When I click on create new account
        And I enter 
            | firstname | lastname | email | password | 
            | Firstest | Lastest | email@gmail.com | password2 | 
        And I click on Join Now button
        Then I should be Signed Up
     
   
     Scenario: User is Logged Out
        When I click on logout button
        Then I should be logged out
   