class shopcart{

    clickContinueShopping(){
        return cy.xpath('//a[normalize-space()="Weiter einkaufen"]').click({force: true})    
    }

    clickCompleteOrder(){
        return cy.xpath('//button[normalize-space()="Bestellung abschließen"]').click({force: true})
    }

    clickRemoveItem(){
        return cy.xpath('//button[normalize-space()="Löschen"]').click({force: true})
    } 

    getEmptyMessage(){
        return cy.xpath('//h1[normalize-space()="Warenkorb"]')
    }    
}
export default shopcart