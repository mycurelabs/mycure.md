module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'keyword-spacing': [2, {before: true, after: true}],
    'space-before-blocks': [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
