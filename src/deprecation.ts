import { fixupPluginRules } from '@eslint/compat'
import { TSESLint } from '@typescript-eslint/utils'
import * as eslintPluginDeprecation from 'eslint-plugin-deprecation'

export const recommended: TSESLint.FlatConfig.Config = {
  plugins: {
    // not fully compatible with with eslint v9.
    // see: https://github.com/gund/eslint-plugin-deprecation/issues/78
    deprecation: fixupPluginRules(eslintPluginDeprecation as any)
  },
  rules: {
    'deprecation/deprecation': 'warn'
  }
}
