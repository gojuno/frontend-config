// ESLint config

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['jest', 'react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prefer-const': 'warn',
    'react/prop-types': [
      'warn',
      {
        ignore: ['dispatch'],
      },
    ],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/jsx-no-target-blank': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 0,
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
