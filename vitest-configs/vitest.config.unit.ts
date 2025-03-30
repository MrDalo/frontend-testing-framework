// vitest.config.unit.ts
import { mergeConfig } from 'vitest/config'
import baseConfig from './vitest.config.base'

export default mergeConfig(baseConfig, {
  test: {
    // Only run unit tests.
    include: ['**/*.unit.test.{js,ts,jsx,tsx}'],
    coverage: {
      exclude: ['src/app/\\[locale\\]/**'],
    },
  },
})
