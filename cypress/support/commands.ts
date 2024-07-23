/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('isInViewport', { prevSubject: 'element' }, (subject) => {
    const bounding = subject[0].getBoundingClientRect();
    const viewportHeight = Cypress.config('viewportHeight');
    const viewportWidth = Cypress.config('viewportWidth');
  
    const isPartiallyVisible = (
      bounding.top < viewportHeight &&
      bounding.bottom > 0 &&
      bounding.left < viewportWidth &&
      bounding.right > 0
    );
  
    return cy.wrap(isPartiallyVisible);
});

Cypress.Commands.add('isNotInViewport', { prevSubject: 'element' }, (subject) => {
    const bounding = subject[0].getBoundingClientRect();
    const viewportHeight = Cypress.config('viewportHeight');
    const viewportWidth = Cypress.config('viewportWidth');
  
    const isNotVisible = (
      bounding.top >= viewportHeight ||
      bounding.left >= viewportWidth ||
      bounding.bottom <= 0 ||
      bounding.right <= 0
    );
  
    return cy.wrap(isNotVisible);
});
  