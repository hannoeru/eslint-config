module.exports = {
  extends: [
    '@hannoeru/eslint-config-ts',
  ],
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
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': ['error', {
          component: true,
          html: true,
        }],
      },
    },
  ],
}
