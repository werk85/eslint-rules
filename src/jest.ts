import { TSESLint } from '@typescript-eslint/utils'
import eslintPluginJest from 'eslint-plugin-jest'

const files = ['**/*.test.{js,ts,jsx,tsx}']

export const recommended: TSESLint.FlatConfig.ConfigArray = [
  {
    files,
    ...eslintPluginJest.configs['flat/recommended'],
    languageOptions: {
      ...eslintPluginJest.configs['flat/recommended'].languageOptions,
      parserOptions: {
        project: 'tsconfig.jest.json'
      }
    },
    rules: {
      ...eslintPluginJest.configs['flat/recommended'].rules,
      'jest/expect-expect': 'error',
      'jest/no-hooks': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-lowercase-title': 'off',
      'jest/unbound-method': 'off'
    }
  }
]

export const stylistic: TSESLint.FlatConfig.Config = {
  files,
  ...eslintPluginJest.configs['flat/style'],
  rules: {
    ...eslintPluginJest.configs['flat/style'].rules
  }
}
