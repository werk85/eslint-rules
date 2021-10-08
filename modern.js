module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'deprecation', 'jest', 'prettier'],
  settings: {
    'import/resolver': {
      // Fixes import/default errors
      // See: https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/31#issuecomment-578105323
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'deprecation/deprecation': 'warn',
    'eqeqeq': [
      'error',
      'always',
      {
        'null': 'ignore'
      }
    ],
    'import/namespace': 'off',
    'import/order': 'error',
    'jest/lowercase-name': 'off',
    'jest/no-hooks': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/unbound-method': 'off',
    'object-shorthand': ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        parser: 'typescript',
        printWidth: 130,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic'
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'Array': {
            message: 'Use ReadonlyArray instead',
            fixWith: 'ReadonlyArray'
          },

          'Map': {
            message: 'Use ReadonlyMap instead',
            fixWith: 'ReadonlyMap'
          },

          'Set': {
            message: 'Use ReadonlySet instead',
            fixWith: 'ReadonlySet'
          }
        },
        extendDefaults: true
      }
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
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
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/restrict-template-expressions': 'error'
  }
}