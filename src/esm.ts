import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: ['.']
      }
    ],
    '@typescript-eslint/no-useless-empty-export': 'error'
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'side-effect',
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'unknown'
        ],
        newlinesBetween: 'never'
      }
    ],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }]
  }
}
