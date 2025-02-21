import { logAccessibilityViolations } from '../utils/logAccessibilityViolations'

describe('Homepage Accessibility', () => {
  beforeEach(() => {
    cy.visit('/en')
    cy.injectAxe()
  })

  it('should have no detectable a11y violations on load', () => {
    cy.checkA11y('', undefined, logAccessibilityViolations)
  })
})
