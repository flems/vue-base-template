module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-var": 1,
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "no-return-await": 1
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
