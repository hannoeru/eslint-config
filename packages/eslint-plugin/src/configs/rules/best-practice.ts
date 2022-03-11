import { defineRules } from '../../utils'

export default defineRules({
  // best-practice
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'consistent-return': 'off',
  'complexity': ['off', 11],
  'eqeqeq': ['error', 'smart'],
  'no-alert': 'warn',
  'no-case-declarations': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-with': 'error',
  'no-void': 'error',
  'no-useless-escape': 'off',
  'vars-on-top': 'error',
  'require-await': 'off',
  'no-return-assign': 'off',
  'operator-linebreak': ['error', 'before'],
})
