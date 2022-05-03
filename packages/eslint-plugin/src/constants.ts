import config from 'eslint-config-standard/.eslintrc.json'
import type { TSESLint } from '@typescript-eslint/utils'

export const equivalents = [
  'comma-spacing',
  'dot-notation',
  'brace-style',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-vars',
  'no-unused-expressions',
  'no-useless-constructor',
  'quotes',
  'semi',
  'space-before-function-paren',
  'space-infix-ops',
  'object-curly-spacing',
] as const

export const configStandard = config as unknown as TSESLint.Linter.Config

export const resolverExtensions = ['.js', '.jsx', '.mjs', '.cjs', '.json']
export const resolverExtensionsWithTS = ['.ts', '.tsx', ...resolverExtensions]
