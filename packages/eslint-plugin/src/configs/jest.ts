import { defineConfig } from '../utils'

export default defineConfig({
  extends: [
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
  ],
  settings: {
    jest: {
      version: 26,
    },
  },
  rules: {
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/no-restricted-matchers': [
      'error',
      {
        toBeTruthy: 'Avoid `toBeTruthy`',
        toBeFalsy: 'Avoid `toBeFalsy`',
        resolves: 'Use `expect(await promise)` instead.',
      },
    ],
    'jest/valid-title': [
      'error',
      {
        disallowedWords: [
          'correct',
          'appropriate',
          'properly',
          'should',
          'every',
          'descriptive',
        ],
      },
    ],
  },
})
