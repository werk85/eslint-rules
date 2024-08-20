import { TSESLint } from '@typescript-eslint/utils'

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic'
      }
    ],
    '@stylistic/array-bracket-newline': ['error', { multiline: true }],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never']
  }
}
