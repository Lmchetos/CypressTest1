export class TestPage{
    checkElements(){
        cy.get('li').children().should('have.length', 5)
    
    }}


 