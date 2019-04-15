// eslint config

module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "prefer-const": "warn",
    "react/prop-types": [
      "warn",
      {
        ignore: ["dispatch"]
      }
    ],
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "react/jsx-no-target-blank": "warn"
  },
  globals: {
    __REVISION__: false
  }
};
