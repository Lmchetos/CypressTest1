
describe('TEST DE LOGIN', () =>{
    beforeEach(() =>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(':nth-child(21) > a').click()
    })

it('A valid user can login', () =>
{   
    //Para hacer solo el test de uno de los del grupo poner: it.alone
    //para saltar uno del grupo: it.skip
    //Para que haga algo comun con todos los test, utilizar el BeforeEach
    
    
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")

 })

 it('An invalid password cannot login', () =>
{   

    
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!5")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")

 })

 it('A invalid user cannot login', () =>
{   
    
    
    cy.get('#username').type("Tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")

 })

 it('An empty user cannot login', () =>
 {   
    
    
    cy.get('#username').type("clear")
    cy.get('#password').type("clear")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
 
 })

})


