describe('Homepage Visual Tests', () => {
  it('should match the baseline screenshot', () => {
    cy.visit('/')
    // Takes a screenshot, compares to baseline.
    // If baseline doesn't exist, it creates one (in "base" mode).
    cy.compareSnapshot('homepage')
  })
})
