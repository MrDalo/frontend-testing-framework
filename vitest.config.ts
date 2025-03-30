// vitest.config.ts in the root folder
import { mergeConfig } from 'vitest/config'
import baseConfig from './vitest-configs/vitest.config.base'

export default mergeConfig(baseConfig, {
  // You can override or add properties here if needed.
  test: {
    // For example, if you want the default to run all tests,
    // you could define include to be a union of patterns:
    include: [
      '**/*.unit.test.{js,ts,jsx,tsx}',
      '**/*.integration.test.{js,ts,jsx,tsx}',
      '**/*.i18n.test.{js,ts,jsx,tsx}',
    ],
  },
})
