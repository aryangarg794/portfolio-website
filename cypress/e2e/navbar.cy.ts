describe('Check that navbar is working as intended', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('check if all elements in navbar are visible', () => {
        cy.get("nav#navbar").should('exist').should('be.visible');
        cy.get("a#logo").should('exist').should('be.visible');
        cy.get("a#aboutnavbutton").should('exist').should('be.visible');
        cy.get("a#projectsnavbutton").should('exist').should('be.visible');
        cy.get("a#resume").should('exist').should('be.visible');
    })

    it('check if clicking logo returns to home page', () => {
        cy.get("a#logo").should('exist').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    })

    it('check if clicking about goes to about section', () => {
        cy.get("a#aboutnavbutton").should('exist').click();
        cy.get("section#about").isInViewport().should('be.true');
        cy.get("section#landing").isNotInViewport().should('be.true');
        cy.get("section#projects").isNotInViewport().should('be.true');
        cy.get("footer#footer").isNotInViewport().should('be.true');
    })

    it('check if clicking projects goes to projects section', () => {
        cy.get("a#projectsnavbutton").should('exist').click();
        cy.get("section#projects").isInViewport().should('be.true');
        cy.get("section#landing").isNotInViewport().should('be.true');
        cy.get("section#about").isNotInViewport().should('be.true');
        cy.get("footer#footer").isNotInViewport().should('be.true');
    })

    it('check if clicking resume opens a pdf', () => {
        cy.get('a#resume').should('have.attr', 'href').should('eq', '/Aryan_Garg_CV_SPAR.pdf');
    })

})