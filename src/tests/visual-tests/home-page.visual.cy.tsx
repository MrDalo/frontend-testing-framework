describe('Homepage Visual Tests', () => {
  it('should match the baseline screenshot', () => {
    cy.visit('/')
    cy.compareSnapshot('homepage')
  })
})
