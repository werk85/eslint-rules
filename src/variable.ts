import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn'
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    '@stylistic/one-var-declaration-per-line': ['off'],
    '@stylistic/rest-spread-spacing': ['error', 'never']
  }
}
