import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'error'
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@stylistic/member-delimiter-style': [
      'error',
      {
        singleline: {
          delimiter: 'comma',
          requireLast: false
        },
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ],
    'perfectionist/sort-intersection-types': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-union-types': ['error', { type: 'natural', order: 'asc' }]
  }
}
