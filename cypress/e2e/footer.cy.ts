describe('Check that about section is working as intended', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get("footer#footer").should('exist').scrollIntoView();
        cy.wait(500);
    })

    it('check if all elements exist in footer section', () => {
        cy.get("footer#footer").should('exist').should('be.visible');
        cy.get("span#built").should('exist').should('be.visible');
        cy.get("footer#footer").should('exist').should('be.visible');
        cy.get("ul#socials").should('exist').should('be.visible');
    })
})