class login{
   
    visitSignup(){
        return cy.xpath('//*[@data-testid="EmailField"]')
    } 

    myEmail(){
        return cy.xpath('//*[@data-testid="EmailField"]')
    } 
    myPassword(){
        return cy.xpath('//*[@data-testid="PasswordField"]')
    } 
    clickRegister(){
        const btnregister = cy.xpath('//button[@type="submit"]')
        btnregister.click({ force: true })
    } 
    clickMenuRegister(){
        const btnMenuRegister = cy.xpath('//*[@id="modal-root"]/div/div/div/div/div/div[2]/div/div[1]/div[2]')
        btnMenuRegister.should('be.visible').click({ force: true })
    } 
}
export default login