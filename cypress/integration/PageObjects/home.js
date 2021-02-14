class home{
     
    visitHome(){
        cy.visit('https://aboutyou.de',{ timeout: 30000 })
        const cookie = cy.xpath('//*[@id="onetrust-accept-btn-handler"]')
        cookie.click()
    }
   
    clickLoginIcon(){
        const iconLogin = cy.xpath('//li[@data-test-id="UserAccount"]//a[@data-test-id="WishlistIconHeader"]')
        iconLogin.should('be.visible').click({ multiple: true, force: true })
    }
     
    clickBasketIcon(){
        const basketIcon = cy.xpath('//a[@href="/warenkorb"]')
        basketIcon.click({ multiple: true, force: true })
    }
 
    clickLogout(){
        const itemLogout = cy.xpath('//button[normalize-space()="Abmelden"]')
        itemLogout.click({force: true})
    }

    clickCreateAccount(){
        return cy.xpath('//span[normalize-space()="Jetzt Konto erstellen"]').should('be.visible').click()    
    }

    validateMyHeader(txtUsername){
        const myHeader = cy.xpath('//span[@data-test-id="UserName"]')
        myHeader.should('have.text',txtUsername)
      
    }
}
export default home