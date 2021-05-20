context('Login', () =>{
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('Login with incorrect email', () => {
        cy.login('pruebas', 'pruebas')
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address')
        })
    })
})