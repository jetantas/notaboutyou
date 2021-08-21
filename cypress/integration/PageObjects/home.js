class home{
     
    visitHome(){
        cy.visit('https://aboutyou.de',{ timeout: 30000 })
        cy.get('#onetrust-accept-btn-handler').click()
    }
   
    clickLoginIcon(){
        return cy.get('.userIcon--3f8KV').click({force: true})
    }
    
    clickLogout(){
        const itemLogout = cy.xpath('//button[normalize-space()="Abmelden"]')
        itemLogout.click({force: true})
    }

    validateMyHeader(txtUsername){
        return cy.get('.t6bp6s-9 > .t6bp6s-3').should('have.text',txtUsername) 
    }
}
export default home