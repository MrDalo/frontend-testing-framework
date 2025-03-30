import { mergeConfig } from 'vitest/config'
import baseConfig from './vitest.config.base'

export default mergeConfig(baseConfig, {
  test: {
    include: ['**/*.integration.test.{js,ts,jsx,tsx}'],
  },
})
