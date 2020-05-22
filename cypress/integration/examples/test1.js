describe("Test web-site", function()
{
  
    it("Test the buttons", function() {

         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
         cy.get(':nth-child(1) > .stepper-input > .increment').click()
         cy.get(':nth-child(1) > .product-action > button').click()
         cy.get('.search-keyword').type("Grapes")
         cy.wait(1000)
         cy.get('.product-action > button').click()
         cy.get('.search-keyword').clear()
         cy.get('.cart-icon > img').click()
         cy.wait(1000)
         cy.get(':nth-child(2) > .product-action > button').click()
         cy.get(':nth-child(3) > .product-action > button').click()
         cy.get(':nth-child(4) > .product-action > button').click()
         cy.get(':nth-child(5) > .product-action > button').click()
         cy.get(':nth-child(6) > .product-action > button').click()
         cy.get('.cart-icon > img').click()
    })
})