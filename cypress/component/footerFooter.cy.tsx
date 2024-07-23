import React from 'react'
import Footer from '../../src/components/footer'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})