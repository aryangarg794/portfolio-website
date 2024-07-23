describe('Check that not found page is working as intended', () => {

    beforeEach(() => {
        cy.visit('/docs', {'failOnStatusCode': false});
    })

    it('check if all elements are visible properly', () => {
        cy.get("div#not-found").should('exist').should('be.visible');
        cy.get("div#404icon").should('exist').should('be.visible');
        cy.get("h2#notfoundtext").should('exist').should('be.visible');
        cy.get("a#returnhomebutton").should('exist').should('be.visible');
    })

    it('check if button returns to home', () => {
        cy.get("a#returnhomebutton").should('exist').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        cy.get("section#landing").should('exist').should('be.visible');
    })

})