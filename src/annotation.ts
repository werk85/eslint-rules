import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
    '@typescript-eslint/no-restricted-types': [
      'error',
      {
        types: {
          Array: {
            message: 'Use ReadonlyArray instead',
            fixWith: 'ReadonlyArray'
          },
          Map: {
            message: 'Use ReadonlyMap instead',
            fixWith: 'ReadonlyMap'
          },
          Set: {
            message: 'Use ReadonlySet instead',
            fixWith: 'ReadonlySet'
          }
        }
      }
    ]
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error'
  }
}
