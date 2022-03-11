import { defineRules } from '../../utils'

export default defineRules({
  // unicorns
  // Pass error message when throwing errors
  'unicorn/error-message': 'error',
  // Uppercase regex escapes
  'unicorn/escape-case': 'error',
  // Array.isArray instead of instanceof
  'unicorn/no-array-instanceof': 'error',
  // Prevent deprecated `new Buffer()`
  'unicorn/no-new-buffer': 'error',
  // Keep regex literals safe!
  'unicorn/no-unsafe-regex': 'off',
  // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
  'unicorn/number-literal-case': 'error',
  // ** instead of Math.pow()
  'unicorn/prefer-exponentiation-operator': 'error',
  // includes over indexOf when checking for existence
  'unicorn/prefer-includes': 'error',
  // String methods startsWith/endsWith instead of more complicated stuff
  'unicorn/prefer-starts-ends-with': 'error',
  // textContent instead of innerText
  'unicorn/prefer-text-content': 'error',
  // Enforce throwing type error when throwing error while checking typeof
  'unicorn/prefer-type-error': 'error',
  // Use new when throwing error
  'unicorn/throw-new-error': 'error',
})
