import { defineConfig } from '../utils'
import reactRules from './rules/react'

export default defineConfig({
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: ['plugin:react-hooks/recommended'],
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:react/recommended'],
      settings: {
        react: {
          version: '17',
        },
      },
      rules: {
        'jsx-quotes': [
          'error',
          'prefer-double',
        ],
        // off
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',

        ...reactRules,
      },
    },
  ],
})
