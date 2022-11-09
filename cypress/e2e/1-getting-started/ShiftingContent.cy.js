
describe('TEST DE SHIFTING', () =>{
    beforeEach(() =>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(':nth-child(39) > a').click()
        
    })
it('ShiftingContent', ()=>{
    
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('li').children().should('have.length', 5)


})
})