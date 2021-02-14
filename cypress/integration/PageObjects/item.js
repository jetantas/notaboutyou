class item{

    clickMenSection(){
        return cy.xpath('//span[normalize-space()="Männer"]').click({force: true})
       
    }

    clickAccessoires(){
        return cy.xpath('//span[@class="animatedUnderline--bScsF"][normalize-space()="Accessoires"]').click({force: true})
       
    }

    clickMenItem(){
        return cy.xpath('//p[normalize-space()="Calvin Klein Jeans"]').click({force: true})
        
    }

}
export default item