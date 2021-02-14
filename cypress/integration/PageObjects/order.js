class order{

    
    clickContinue(){
        return cy.xpath('//button[@class="primary"]')
    }

    clickConfirm(){
        return cy.xpath('//span[@class="confirm"]')
    }

    getPaymentMethod(){
        return cy.xpath('//label[@for="payment-method-computop_creditcard_visa"]//img[@alt="computop_creditcard_visa"]')   
    }

    getOrderTitle(){
        return cy.xpath('//h2[normalize-space()="Deine Bestellung"]')   
    }

}
export default order