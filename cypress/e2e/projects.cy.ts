describe('Check that projects section is working as intended', () => {
    
    const links = [
        'https://github.com/aryangarg794/FaceEmoApp', 
        'https://github.com/aryangarg794/reproduction_gan', 
        'https://github.com/aryangarg794/ICU-Prediction', 
        'https://github.com/aryangarg794/portfolio-website'
    ]

    beforeEach(() => {
        cy.visit('/');
        cy.get("a#projectsnavbutton").should('exist').click();
        cy.wait(500);
    })

    it('check if all elements exist in projects section', () => {
        cy.get("section#projects").should('exist').should('be.visible');
        cy.get("div#titleprojects").should('exist').should('be.visible');
        cy.get("div#projects-grid").should('exist').should('be.visible');
        cy.get("div#textinfo-1").should('exist').should('be.visible');
        cy.get("div#project-skills-1").should('exist').should('be.visible');
        cy.get("p#descprojects").should('exist').should('be.visible');
        cy.get("p#extradesc").should('exist').should('be.visible');
        cy.get("a#github-button").should('exist').should('be.visible');
    })

    it('check for each project if it opens a page to github', () => {
        for (let i = 1; i < 5; i++) {
            cy.get("a#link-" + i.toString()).should('have.attr', 'href').should('eq', links[i-1])
        }
    })

    it('check if clicking see more opens github page', () => {
        cy.get('a#github-button').should('exist').should('have.attr', 'href').should('eq', 'https://github.com/aryangarg794?tab=repositories');
    })
})