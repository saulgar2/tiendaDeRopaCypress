context('Search elements', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })

    it('Search for elements with multiple results', () => {
        cy.search('dress')
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.title).should('contain','dress');
        })
    })
    it('Search for elements with no results', () => {
        cy.search('qwerty')
        cy.fixture('searchResult').then((searchResult) => {
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
})