import { defineConfig } from '../utils'

export default defineConfig({
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        // @ts-expect-error
        parser: '@typescript-eslint/parser',
      },
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
        // 'vue/html-self-closing': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
})
