// TypeScript

const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: true,
    project: path.resolve(process.cwd(), 'tsconfig.json'),
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prefer-const': 'warn',
    'react/prop-types': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/jsx-no-target-blank': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  globals: {
    __RELEASE_NAME__: false,
    __REVISION__: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
