module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    // 'linebreal-style': 'off',
    'require-jsdoc': 'off',
    'no-trailing-spaces': 'off',
    'max-len': 'off',
    'linebreak-style': 'off'
  }
}
