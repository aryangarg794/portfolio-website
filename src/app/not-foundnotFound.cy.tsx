import React from 'react'
import notFound from './not-found'

describe('<notFound />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<notFound />)
  })
})