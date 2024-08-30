import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    // this seems not to work properly for destructuring
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }]
  }
}
