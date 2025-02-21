describe('Counter interactoin', () => {
  it('interacts with button to increase or decrease counter', () => {
    cy.visit('http://localhost:3000/example')

    cy.contains('0')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.space-x-4 > :nth-child(1)').click()
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.space-x-4 > :nth-child(1)').click()
    cy.get('.space-x-4 > :nth-child(1)').click()
    cy.get('.space-x-4 > :nth-child(1)').click()
    cy.get('[data-testid="display-box"]').should('have.text', '4')
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('[data-testid="display-box"]').should('have.text', '1')
    cy.get('[data-testid="display-box"]').should('have.class', 'bg-green-300')
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('.space-x-4 > :nth-child(2)').click()
    cy.get('[data-testid="display-box"]').should('have.text', '-2')
    cy.get('[data-testid="display-box"]').should('have.class', 'bg-red-300')
    /* ==== End Cypress Studio ==== */
  })
})
