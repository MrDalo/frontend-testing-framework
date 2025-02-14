import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.integration.test.[jt]s?(x)'],
  transformIgnorePatterns: ['node_modules/(?!(jose)/)'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default createJestConfig(config)
