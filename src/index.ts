import eslintPluginJavascript from '@eslint/js'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
import { TSESLint } from '@typescript-eslint/utils'
import { Linter } from 'eslint'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginTypescript from 'typescript-eslint'
import * as annotation from './annotation'
import * as array from './array'
import * as comment from './comment'
import * as declaration from './declaration'
import * as deprecation from './deprecation'
import * as esm from './esm'
import * as func from './function'
import * as objects from './objects'
import * as oop from './oop'
import * as operator from './operator'
import * as reference from './reference'
import * as security from './security'
import * as separator from './separator'
import * as statement from './statement'
import * as string from './string'
import * as variable from './variable'
import * as whitespace from './whitespace'

export const recommended: TSESLint.FlatConfig.ConfigArray = [
  eslintPluginJavascript.configs.recommended,
  ...eslintPluginTypescript.configs.strict,
  annotation.recommended,
  declaration.recommended,
  deprecation.recommended,
  esm.recommended,
  func.recommended,
  objects.recommended,
  oop.recommended,
  operator.recommended,
  security.recommended,
  statement.recommended,
  variable.recommended,
  {
    languageOptions: {
      parserOptions: {
        // required for typescript-eslint rules to determine tsconfig.json automatically
        projectService: true
      }
    },
    rules: {
      // we use void as a shorthand for optionally undefined parameter, e.g.
      // `payload: void` is equivalent to and is more sound than `payload?: undefined`.
      '@typescript-eslint/no-invalid-void-type': 'off'
    }
  }
]

/**
 * Currently it is not clear which config type is the correct. Comparing the
 * actual data then `TSESLint.FlatConfig.Config` seems to be the correct one
 * regarding plugins which is a record instead of a string array as suggested by
 * `Linter.Config`. On the other hand `Linter.Config` is the official type from
 * eslint. 🤷
 *
 * As a workaround we allow both types until the correct type is clarified.
 */
type Config = Linter.Config | TSESLint.FlatConfig.Config

export const stylistic: ReadonlyArray<Config> = [
  ...eslintPluginTypescript.configs.stylistic,
  eslintPluginStylistic.configs['recommended-flat'],
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist
    }
  },
  annotation.stylistic,
  array.stylistic,
  comment.stylistic,
  declaration.stylistic,
  esm.stylistic,
  func.stylistic,
  objects.stylistic,
  operator.stylistic,
  reference.stylistic,
  separator.stylistic,
  statement.stylistic,
  string.stylistic,
  variable.stylistic,
  whitespace.stylistic
]
