describe('Check that landing section is working as intended', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('check if all elements exist in landing section', () => {
        cy.get("section#landing").should('exist').should('be.visible');
        cy.get("a#findmorebutton").should('exist').should('be.visible');
        cy.get("a#name").should('exist').should('be.visible');
        cy.get("p#smalldesc").should('exist').should('be.visible');
    })

    it('check that the button can be clicked and works', () => {
        cy.get("a#findmorebutton").should('exist').click();
        cy.get("section#about").isInViewport().should('be.true');
        cy.get("section#landing").isNotInViewport().should('be.true');
        cy.get("section#projects").isNotInViewport().should('be.true');
        cy.get("footer#footer").isNotInViewport().should('be.true');
    })
})