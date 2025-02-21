// jest.config.ts
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

  /**
   * By default, we'll match ANY files named *.test.ts, *.test.tsx, etc.
   * That includes *.unit.test.ts and *.integration.test.ts.
   *
   * We'll override this in scripts via --testMatch to narrow down which ones run.
   */
  testMatch: [
    '**/*.unit.test.[jt]s?(x)',
    '**/*.integration.test.[jt]s?(x)',
    '**/*.i18n.test.[jt]s?(x)',
  ],

  transformIgnorePatterns: [
    'node_modules/(?!(jose)/)', // e.g., transform `jose` module
  ],

  globals: {
    'ts-jest': {
      useESM: true,
    },
  },

  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    // Handle .js imports in ESM code
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default createJestConfig(config)
