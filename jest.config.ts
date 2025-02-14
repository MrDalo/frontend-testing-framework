/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 * https://nextjs.org/docs/app/building-your-application/testing/jest
 */

import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  // Only match files that end in .unit.test.ts or .unit.test.tsx
  testMatch: ['**/*.unit.test.[jt]s?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jose)/)', // Transform `jose` module
  ],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    '^(\\.{1,2}/.*)\\.js$': '$1', // Handle .js imports
  },
}

export default createJestConfig(config)
