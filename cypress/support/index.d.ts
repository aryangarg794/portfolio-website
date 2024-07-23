declare namespace Cypress {
    interface Chainable {
      isInViewport(): Chainable<boolean>;
      isNotInViewport(): Chainable<boolean>;
    }
    
  }