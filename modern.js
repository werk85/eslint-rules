module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/namespace': 'off',
    'import/order': 2,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'typescript',
        printWidth: 130,
        semi: false,
        singleQuote: true
      }
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off'
  }
}