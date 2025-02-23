/* eslint-disable @typescript-eslint/no-unused-vars */
// cypress.config.ts
import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
    },
    env: {
      // Plugin's mode: "regression" compares new shots to existing base images;
      // "base" will generate new base images so it will overwrites existing ones.
      visualRegressionType: 'regression',

      // 'always' means generate a diff image even if the test passes.
      // Options: 'fail' (only generate on mismatch), 'never', 'always'
      visualRegressionGenerateDiff: 'fail',

      // If true, don't throw an error when there's a mismatch (just logs result).
      // If false, a mismatch will fail the test.
      visualRegressionFailSilently: false,
    },

    screenshotsFolder: './cypress/snapshots/actual',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'src/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})
