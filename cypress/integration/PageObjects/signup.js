class signup{

    myFirstName(){
        return cy.xpath('//input[@name="firstName"]')
    } 
    myLastName(){
        return cy.xpath('//input[@name="lastName"]')
    } 
    
    myEmail(){
        return cy.xpath('//input[@name="email"]')
    } 

    myPassword(){
        return cy.xpath('//input[@name="password"]')
    } 
    
    clickJoinNow(){
        return cy.get('[data-testid=RegisterSubmitButton]').click({force: true})
    } 
    
}
export default signup