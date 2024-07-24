describe('Check that website is responsive for iphone', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.viewport('iphone-6');
    })

    it('check if new navbar works', () => {
        cy.get("nav#navbar").should('exist').should('be.visible');
        cy.get("a#logo").should('exist').should('be.visible');
        cy.get("a#aboutnavbutton").should('exist').should('not.be.visible');
        cy.get("a#projectsnavbutton").should('exist').should('not.be.visible');
        cy.get("a#resume").should('exist').should('not.be.visible');
        cy.get("a#navbar-phone").should('exist').should('be.visible');
    })

    it('check if clicking mobile navbar works', () => {
        cy.get("a#navbar-phone").should('exist').should('be.visible').click();
        cy.wait(1000);
        cy.get("div#navlinks-phone").should('exist').should('be.visible');
        cy.get("a#projectsnavbuttonphone").should('exist').should('be.visible');
        cy.get("a#aboutnavbuttonphone").should('exist').should('be.visible');
        cy.get("a#resumephone").should('exist').should('be.visible');
        cy.get("div#nav-phone-socials").should('exist').should('be.visible');
        cy.get("a#navbar-phone").should('exist').should('be.visible').click();
        cy.get("div#navlinks-phone").should('exist').should('not.be.visible');
    })

    it('check if all elements exist in about section', () => {
        cy.get("footer#footer").should('exist').scrollIntoView();
        cy.wait(1000);
        cy.get("section#about").should('exist').should('be.visible');
        cy.get("div#titleabout").should('exist').should('be.visible');
        cy.get("div#introduction").should('exist').should('be.visible');
        cy.get("div#skills").should('exist').should('be.visible');
        cy.get("p#descabout").should('exist').should('be.visible');
        cy.get("div#Python-skill").should('exist').should('be.visible');
    })

    it('check if all elements exist in footer section', () => {
        cy.get("footer#footer").should('exist').should('be.visible');
        cy.get("span#built").should('exist').should('be.visible');
        cy.get("footer#footer").should('exist').should('be.visible');
        cy.get("ul#socials").should('exist').should('be.visible');
    })

    it('check if all elements exist in landing section', () => {
        cy.get("footer#footer").should('exist').scrollIntoView();
        cy.wait(1000);
        cy.get("section#landing").should('exist').should('be.visible');
        cy.get("a#findmorebutton").should('exist').should('be.visible');
        cy.get("a#name").should('exist').should('be.visible');
        cy.get("p#smalldesc").should('exist').should('be.visible');
    })

    it('check if all elements exist in projects section', () => {
        cy.get("footer#footer").should('exist').scrollIntoView();
        cy.wait(1000);
        cy.get("section#projects").should('exist').should('be.visible');
        cy.get("div#titleprojects").should('exist').should('be.visible');
        cy.get("div#projects-grid").should('exist').should('be.visible');
        cy.get("div#textinfo-1").should('exist').should('be.visible');
        cy.get("div#project-skills-1").should('exist').should('be.visible');
        cy.get("p#descprojects").should('exist').should('be.visible');
        cy.get("p#extradesc").should('exist').should('be.visible');
        cy.get("a#github-button").should('exist').should('be.visible');
    })

    it('check if button to scroll to top exists', () => {
        cy.get("footer#footer").should('exist').scrollIntoView();
        cy.get("button#buttontotop").should('exist').should('be.visible');
    })
})