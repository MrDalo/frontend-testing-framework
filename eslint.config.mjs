/* eslint-disable import/no-anonymous-default-export */
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import security from 'eslint-plugin-security' // 1) Import the security plugin

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/.next',
      '**/.cache',
      '**/package-lock.json',
      '**/public',
      '**/node_modules',
      '**/next-env.d.ts',
      '**/next.config.ts',
      '**/pnpm-lock.yaml',
      '**/.gitignore',
    ],
  },
  // 2) Extend the recommended config from security
  ...fixupConfigRules(
    compat.extends(
      'next',
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:security/recommended', // <-- Security recommended ruleset
      'prettier',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended'
    )
  ),
  {
    // 3) Add the plugin to the "plugins" object
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      security: fixupPluginRules(security), // <-- Make sure we include 'security' here
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
      },
      parser: tsParser,
    },

    settings: {
      react: {
        version: 'detect',
        tailwindcss: {
          config: './tailwind.config.ts',
        },
      },
    },

    // 4) Adjust or override rules here
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-fragments': 'warn',
      'react/self-closing-comp': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/prop-types': 'warn',
      'react/no-children-prop': 'warn',
      'react/button-has-type': 'warn',
      'react/display-name': 'warn',
      'react/no-typos': 'warn',

      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-pascal-case': 'warn',
      'react/jsx-max-depth': [
        'warn',
        {
          max: 5,
        },
      ],
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-sort-props': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'tailwindcss/no-custom-classname': 'off',

      'arrow-body-style': ['warn', 'as-needed'],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'linebreak-style': ['warn', 'unix'],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'no-empty': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      'no-duplicate-imports': 'warn',
      '@typescript-eslint/no-restricted-types': 'warn',
      'object-shorthand': 'warn',

      // Optional: Some security rules can be too strict, so you might turn them off or lower severity
      // e.g. security/detect-object-injection is often too noisy for front-end code:
      // 'security/detect-object-injection': 'off',
    },
  },
]
