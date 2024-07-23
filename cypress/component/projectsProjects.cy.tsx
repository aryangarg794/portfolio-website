import React from 'react'
import Projects from '../../src/components/projects'

describe('<Projects />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Projects />)
  })
})