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
        return cy.xpath('//span[normalize-space()="Jetzt registrieren"]').click({force: true})
    } 
    
}
export default signup