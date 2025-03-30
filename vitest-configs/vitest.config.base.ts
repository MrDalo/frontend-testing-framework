// vitest-configs/vitest.config.base.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    server: {
      deps: {
        inline: ['@telekom-ods/react-ui-kit', '@telekom-ods/react-ui-kit-base'],
      },
    },
    // These are common to all test types.
    setupFiles: [path.resolve(__dirname, '../vitest.setup.tsx')],
    reporters: ['default', 'html'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules',
        'src/lib/test-utils',
        'src/tests',
        'src/app/auth',
        'src/lib/utils',
        'src/providers',
        'src/i18n',
        'src/lib/logger',
        'src/stores',
        'src/app/api/auth',
      ],
    },
  },
})
