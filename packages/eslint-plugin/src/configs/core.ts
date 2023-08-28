import { defineConfig } from '../utils'

const ignorePatterns = [
  '*.min.*',
  'CHANGELOG.md',
  'dist',
  'LICENSE*',
  'output',
  'coverage',
  'public',
  'temp',
  'packages-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  '__snapshots__',
  '!.github',
  '!.vitepress',
  '!.vscode',
]

export default defineConfig({
  plugins: ['@hannoeru', 'html', 'eslint-comments'],
  extends: ['standard'],
  ignorePatterns,
  rules: {
    // Common
    'curly': ['error', 'multi-line'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-return-await': 'error',
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': ['error', 'never'],
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
    }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // formatting
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // eslint-comments
    // Require a eslint-enable comment for every eslint-disable comment
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    // Disallow a eslint-enable comment for multiple eslint-disable comments
    'eslint-comments/no-aggregating-enable': 'error',
    // Disallow duplicate eslint-disable comments
    'eslint-comments/no-duplicate-disable': 'error',
    // Disallow eslint-disable comments without rule names
    'eslint-comments/no-unlimited-disable': 'error',
    // Disallow unused eslint-disable comments
    'eslint-comments/no-unused-disable': 'error',
    // Disallow unused eslint-enable comments
    'eslint-comments/no-unused-enable': 'error',
    // Disallow eslint-disable comments about specific rules
    'eslint-comments/no-restricted-disable': 'off',
    // Disallow ESLint directive-comments entirely
    'eslint-comments/no-use': 'off',

    // best-practice
    'block-scoped-var': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'warn',
    'vars-on-top': 'error',
  },
})
