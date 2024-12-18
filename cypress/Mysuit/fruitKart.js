
describe("udemy practice", function(){
    
    it("count item test",function(){
        cy.intercept({ resourceType: /xhr|fetch|other/ }, { log: false })
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type('ca')
        cy.get(".product:visible").should('have.length' ,'4')
       
        //parent child chaining 
        cy.get(".products").find(".product").should('have.length','4')
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()

    })

})