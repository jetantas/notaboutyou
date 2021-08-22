class home{
     
    visitHome(){
        cy.visit('https://en.aboutyou.de/',{ timeout: 30000 })
        cy.get('#onetrust-accept-btn-handler').click()
    }
   
    clickLoginIcon(){
        return cy.get('.userIcon--3f8KV').click({force: true})
    }
    
    clickLogout(){
        const itemLogout = cy.xpath('//button[normalize-space()="Log out"]')
        itemLogout.click({force: true})
    }

    validateMyHeader(txtUsername){
        const myHeader = cy.xpath('//span[@data-test-id="UserName"]', { timeout: 30000 })
        myHeader.should('be.visible')
        myHeader.should('have.text',txtUsername)
    }
}
export default home