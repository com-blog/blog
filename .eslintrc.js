module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: {
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
  plugins: ['vue', '@typescript-eslint', 'unused-imports'],
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@nuxtjs/eslint-config-typescript', '@vue/prettier'],
  rules: {
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
