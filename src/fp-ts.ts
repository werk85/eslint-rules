import { fixupPluginRules } from '@eslint/compat'
import { TSESLint } from '@typescript-eslint/utils'
import * as eslintPluginFpTs from 'eslint-plugin-fp-ts'

/**
 * REMARK: `eslint-plugin-fp-ts` has some issues (e.g. the `no-redundant-flow`
 * works only when imported from fp-ts) and is not maintained anymore.
 */
export const recommended: TSESLint.FlatConfig.ConfigArray = [
  {
    plugins: {
      'fp-ts': fixupPluginRules(eslintPluginFpTs)
    },
    rules: {
      'fp-ts/no-lib-imports': 'error',
      'fp-ts/no-pipeable': 'error',
      'fp-ts/no-redundant-flow': 'error',
      'fp-ts/prefer-bimap': 'error',
      'fp-ts/prefer-chain': 'error',
      'fp-ts/prefer-traverse': 'error'
    }
  }
]
