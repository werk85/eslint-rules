import { TSESLint } from '@typescript-eslint/utils'

export const recommended: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error'
  }
}

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
    '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],

    // keywords
    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],

    // blocks
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/space-before-blocks': ['error', 'always']
  }
}
