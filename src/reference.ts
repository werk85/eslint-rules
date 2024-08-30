import { TSESLint } from '@typescript-eslint/utils'

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/no-whitespace-before-property': ['error']
  }
}
