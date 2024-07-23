describe('Check that about section is working as intended', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get("a#aboutnavbutton").should('exist').click();
        cy.wait(500);
    })

    it('check if all elements exist in about section', () => {
        cy.get("section#about").should('exist').should('be.visible');
        cy.get("div#titleabout").should('exist').should('be.visible');
        cy.get("div#introduction").should('exist').should('be.visible');
        cy.get("div#skills").should('exist').should('be.visible');
        cy.get("p#descabout").should('exist').should('be.visible');
        cy.get("div#Python-skill").should('exist').should('be.visible');
    })
})