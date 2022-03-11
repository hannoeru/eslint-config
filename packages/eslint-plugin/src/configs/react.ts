import { defineConfig } from '../utils'

export default defineConfig({
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'jsx-quotes': [
          'error',
          'prefer-double',
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-bind': ['error', {
          ignoreRefs: true,
          allowFunctions: true,
          allowArrowFunctions: true,
        }],
        'react/jsx-tag-spacing': 'error',
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/self-closing-comp': 'error',
        'react/prefer-es6-class': 'error',
        'react/prefer-stateless-function': 'error',
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
      },
    },
  ],
})
