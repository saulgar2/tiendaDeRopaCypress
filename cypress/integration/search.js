context('Search elements', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {
        cy.search('dress');
        cy.valid('dress');
    })
    it('Search for elements with no results', () => {
        cy.search('qwerty');
        cy.no_valid('No results were found for your search');
    })
})