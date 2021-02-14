/* **********************************************
  Shopping Cart Feature - Steps Definitions 
  Test Scenarios Implementation by Jorge Tantas
*************************************************/

import Login from '../PageObjects/login'
import Home from '../PageObjects/home'
import Item from '../PageObjects/item'
import Order from '../PageObjects/order'
import AddingItem from '../PageObjects/additem'
import ShoppingCart from '../PageObjects/shopcart'

const home = new Home()
const login = new Login()
const shopcart = new ShoppingCart()
const item = new Item()
const additem = new AddingItem()
const order = new Order()

/* *******************************************
  Background: User is Logged In
******************************************* */
Given('I navigate to the home page',() => {
  home.visitHome() 
})
And('I navigate to the login page', () => {
  home.clickLoginIcon()
});
When('I enter', (datatable) => {
datatable.hashes().forEach(element => {
  login.myEmail().type(element.email)
  login.myPassword().type(element.password)
})   
})
And('I click on register button', () => {
 login.clickRegister()
});
Then('I should be logged in', () => {
 home.validateMyHeader("George")
});


/* ****************************************************
  Scenario: Checkout an Item from empty Shopping Cart 
**************************************************** */

Given('I navigate to the shopping cart page',() => {
    home.clickBasketIcon()      
})
And('I continue shopping', () => {   
    shopcart.clickContinueShopping()
});

When('I select men section', () => {  
    item.clickMenSection()   
})

And('I select accessories', () => {   
    item.clickAccessoires()
})

And('I select an item', () => {   
    item.clickMenItem()
})

And('I add a new item to shopping cart', () => {   
    additem.clickAddItem() 
})

And('I checkout the item from shopping cart', () => {
    additem.clickCheckout()    
});

Then('The order title should be shown', () => {
    order.getOrderTitle().should('be.visible')
});

/* ****************************************************
  Scenario: Checkout an Item from Shopping Cart 
**************************************************** */

Given('I navigate to the shopping cart page',() => {
    home.clickBasketIcon()
});

When('I complete the item order', () => {  
    shopcart.clickCompleteOrder()
});

Then('The order title should be shown', () => {
    order.getOrderTitle().should('be.visible')
});

/* ****************************************************
  Scenario: Remove an Item from non empty Shopping Cart 
**************************************************** */

Given('I navigate to the shopping cart page',() => {
    home.clickBasketIcon()
});

When('I remove an item from shopping cart', () => {  
    shopcart.clickRemoveItem()
});

Then('The item should be removed from shopping cart', () => {
    shopcart.getEmptyMessage().should('be.visible')
});