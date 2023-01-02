import { defineConfig } from '../utils'

export default defineConfig({
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
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
        'react/no-unknown-property': 'off',

        // Prevent usage of button elements without an explicit type attribute
        'react/button-has-type': 'off',
        // Prevent missing displayName in a React component definition
        'react/display-name': ['error', { ignoreTranspilerName: false }],
        // Prevent extraneous defaultProps on components
        'react/default-props-match-prop-types': 'error',
        // Forbid foreign propTypes; forbids using another component's prop types unless they are explicitly imported/exported
        'react/forbid-foreign-prop-types': 'error',
        // Forbid certain propTypes
        'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
        // Standardize the way function component get defined
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        // Enforce using <> instead of <React.Fragment> for fragments
        'react/jsx-fragments': ['error', 'syntax'],
        // Prevent using this.state within a this.setState
        'react/no-access-state-in-setstate': 'error',
        // Prevent using Array index in key prop
        'react/no-array-index-key': 'error',
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 'error',
        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        'react/no-redundant-should-component-update': 'error',
        // Prevent this from being used in stateless functional components
        'react/no-this-in-sfc': 'error',
        // Prevent common casing typos
        'react/no-typos': 'error',
        // Prevent usage of UNSAFE_ methods
        'react/no-unsafe': ['error', { checkAliases: true }],
        // Prevent definitions of unused prop types
        'react/no-unused-prop-types': 'error',
        // Attempts to discover all state fields in a React component and warn if any of them are never read.
        'react/no-unused-state': 'error',
        // Prevent usage of setState in componentWillUpdate
        'react/no-will-update-set-state': 'error',
        // Enforce ES5 or ES6 class for React Components
        'react/prefer-es6-class': 'error',
        // Enforce stateless React Components to be written as a pure function
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 'error',
        // Enforce state initialization style
        'react/state-in-constructor': ['error', 'never'],
        // Enforce style prop value being an object
        'react/style-prop-object': 'error',
        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': 'error',

        // JSX

        // Enforce a new line after jsx elements and expressions
        'react/jsx-newline': 'off',
        // Prevent usage of javascript: in URLs
        'react/jsx-no-script-url': 'error',
        // Prevent react contexts from taking non-stable values
        'react/jsx-no-constructed-context-values': 'error',
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': 'error',
        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        'react/jsx-child-element-spacing': 'error',
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': ['error', { location: 'tag-aligned' }],
        // Validate closing tag location in JSX
        'react/jsx-closing-tag-location': 'error',
        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
        'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
        // Enforce or disallow spaces around equal signs in JSX attributes
        'react/jsx-equals-spacing': ['error', 'never'],
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        // Validate props indentation in JSX
        'react/jsx-indent-props': ['error', 2],
        // Validate JSX indentation
        'react/jsx-indent': ['error', 2],
        'react/jsx-key': [
          'error',
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
          },
        ],
        // Enforce position of the first prop in JSX
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': ['error', { maximum: { single: 5, multi: 1 } }],
        // Disallow unnecessary fragments
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        // Limits every line in JSX to one expression each
        'react/jsx-one-expression-per-line': 'off',
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': [
          'error',
          {
            allowNamespace: true,
            allowLeadingUnderscore: true,
          },
        ],
        // Disallow multiple spaces between inline JSX props (fixable)
        'react/jsx-props-no-multi-spaces': 'error',
        // Validate whitespace in and around the JSX opening and closing brackets
        'react/jsx-tag-spacing': 'error',
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': 'error',
      },
    },
  ],
})
