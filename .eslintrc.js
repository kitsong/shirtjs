module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    strict: 'off',
    'no-console': 'warn',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'require-yield': 'off',
    'no-nested-ternary': 'off',
    'class-methods-use-this': 'off',
    'new-cap': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
}
