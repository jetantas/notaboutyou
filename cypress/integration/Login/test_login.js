/* **********************************************
  Login Feature - Steps Definitions 
  Test Scenarios Implementation by Jorge Tantas
*************************************************/

import Login from '../PageObjects/login'
import Home from '../PageObjects/home'
const login = new Login()
const home = new Home()

/* *******************************************
  Scenario: User is Signed In
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

/* *******************************************
  Scenario: User is Signed Out
******************************************* */
When('I click on logout button', () => {
  home.clickLogout()
});
Then('I should be logged out', () => {
  home.validateMyHeader('YOU')
});