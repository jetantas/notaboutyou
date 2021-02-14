class additem{

    clickMenSize(){
        const menSize = cy.xpath('//div[normalize-space()="S"]')
        menSize.click({force: true})
    }

    clickAddItem(){
        return cy.xpath('//button[normalize-space()="Onesize - Hinzufügen"]').click({force: true}) 
    }
    clickCheckout(){
        const btnCheckout = cy.xpath('//div[@data-test-id="AddToBasketFlyInContainer"]//div//div//button[@type="button"][normalize-space()="Zur Kasse"]')
        btnCheckout.click({ force: true })
    }

}
export default additem