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
      },
    },
  ],
}
