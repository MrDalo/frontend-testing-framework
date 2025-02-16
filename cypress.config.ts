/* eslint-disable @typescript-eslint/no-unused-vars */
// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000', // Where your Next.js app runs
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    specPattern: 'src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
