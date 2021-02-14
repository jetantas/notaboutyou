/* **********************************************
  Signup Feature - Steps Definitions 
  Test Scenarios Implementation by Jorge Tantas
*************************************************/

import Home from '../PageObjects/home'
import Login from '../PageObjects/login';
import Signup from '../PageObjects/signup'

const home = new Home()
const login = new Login()
const signup = new Signup()

/* *******************************************
  Scenario: User is Signed Up
******************************************* */

Given('I navigate to the home page', () => {
   home.visitHome() 
})
And('I go to sign up page', () => {
   home.clickLoginIcon()
});

When('I click on create new account', () => {
   //home.clickCreateAccount() 
   login.clickMenuRegister()  
})

And('I enter', (datatable) => {
   datatable.hashes().forEach(element => {
     signup.myFirstName().type(element.firstname)
     signup.myLastName().type(element.lastname)
     signup.myEmail().type(element.email)
     signup.myPassword().type(element.password)
   })   
 })
And('I click on Join Now button', () => {
    signup.clickJoinNow()
 });
Then('I should be Signed Up', () => {
    home.validateMyHeader('Firstest')
});