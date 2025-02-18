/* eslint-disable @typescript-eslint/no-unused-vars */
// cypress.config.ts
import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression'

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000', // Where your Next.js app runs
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
      // implement node event listeners here
    },
    env: {
      // Plugin's mode: "regression" compares new shots to existing base images;
      // "base" will generate new base images so it will overwrites existing ones.
      visualRegressionType: 'regression',

      // Where to store baseline images.
      // The default is 'cypress/snapshots/base', but let's keep them in /src/tests/visual-tests
      // visualRegressionBaseDirectory: 'src/tests/visual-tests/snapshots/base',

      // // Where to put diff images if a mismatch is found.
      // visualRegressionDiffDirectory: 'src/tests/visual-tests/snapshots/diff',

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
