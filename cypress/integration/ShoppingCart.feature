Feature: ShoppingCart

    I want to validate the ShoppingCart feature scenarios

    Background: User is Logged In
        Given I navigate to the home page
        And I navigate to the login page
        When I enter
            | email | password |
            | gtantas@gmail.com | password! |
        And I click on register button
        Then I should be logged in

    Scenario: Checkout an Item from empty Shopping Cart 
        Given I navigate to the shopping cart page
        And I continue shopping
        When I select men section
        And I select accessories
        And I select an item
        And I add a new item to shopping cart
        And I checkout the item from shopping cart
        Then The order title should be shown
     
    Scenario: Checkout an Item from Shopping Cart 
        Given I navigate to the shopping cart page
        When I complete the item order
        Then The order title should be shown
        
    Scenario: Delete an Item from Shopping Cart 
        Given I navigate to the shopping cart page
        When I remove an item from shopping cart
        Then The item should be removed from shopping cart