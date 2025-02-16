describe('Page navigation', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('page-navigation', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000')
    cy.get('.rounded-lg').click()
    cy.url().should('include', '/example')
    cy.get('.text-blue-500').click()
    cy.location('pathname').should('eq', '/')
    /* ==== End Cypress Studio ==== */
  })
})
