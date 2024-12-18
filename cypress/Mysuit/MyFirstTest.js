const jasonData = require("../fixtures/fixtures.json")

beforeEach("before ",()=>{

    cy.log('this block will ewxecute before each it block')
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" ,{failOnStatusCode: false    })
    cy.title().then(data =>{
     cy.log(data)
     assert.equal(data,'OrangeHRM')
     })
})

describe('My first test', function()
{
        jasonData.forEach( para =>{
        it("verify title positive", function()
        {
            
                 cy.get("input[name='username']").type(para.id)
                 cy.get("input[name='password']").type(para.pass)
                 cy.get("button[type='submit']").click({force: true})
                 cy.wait(2000)
                 cy.screenshot();
        })




        
    })

  
     


})