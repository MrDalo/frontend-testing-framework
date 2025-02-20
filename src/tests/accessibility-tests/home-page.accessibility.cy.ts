// src/tests/accessibility-tests/homepage.accessibility.cy.ts

describe('Homepage Accessibility', () => {
  beforeEach(() => {
    // 1. Visit the homepage
    cy.visit('/')
    // 2. Inject axe-core script for testing
    cy.injectAxe()
  })

  it('should have no detectable a11y violations on load', () => {
    // 3. Run axe against the entire page
    cy.checkA11y()
  })
})
