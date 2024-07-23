describe('Check that scroll to top button is working as intended', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get("footer#footer").should('exist').scrollIntoView();
    })

    it('check if button to scroll to top exists', () => {
        cy.get("button#buttontotop").should('exist').should('be.visible');
    })

    it('check if button to scroll to top works as intended', () => {
        cy.get("button#buttontotop").should('exist').should('be.visible').click();
        cy.wait(1000);
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(0, 100);
        });
    })
})