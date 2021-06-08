module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@hannoeru/eslint-config-ts',
  ],
  rules: {
    'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
    // 'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
  },
}
