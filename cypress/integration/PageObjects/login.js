class login{
   
    myEmail(){
        return cy.xpath('//*[@data-testid="EmailField"]')
    } 
    myPassword(){
        return cy.xpath('//*[@data-testid="PasswordField"]')
    } 
    clickMenuRegister(){
        return cy.get('.sc-3c0nvi-0 > :nth-child(1)').click()   
    } 
    clickMenuLogin(){
        return cy.get('.sc-3c0nvi-2').click()   
    }
    clickRegister(){
        return cy.xpath('//button[@type="submit"]').click({force: true})
       
    } 
   
}
export default login