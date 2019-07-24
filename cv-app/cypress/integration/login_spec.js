describe('Log in test', () => {


    it('Logs in with default user', () => {
        cy.visit('http://localhost:4200/login')


        cy.get('[placeholder=Email]')
        .clear()
        .type('user');
        
        cy.get('[placeholder=Password]')
        .clear()
        .type('password');
        
        cy.contains('Submit').click()
        cy.url().should('include', '/landing')
    })
})