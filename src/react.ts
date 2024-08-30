import { fixupPluginRules } from '@eslint/compat'
import { TSESLint } from '@typescript-eslint/utils'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

const files = ['**/*.{jsx,tsx}']

export const recommended: TSESLint.FlatConfig.ConfigArray = [
  {
    files,
    ...eslintPluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/display-name': 'off',
      'react/jsx-key': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/void-dom-elements-no-children': 'error',
      'react/self-closing-comp': 'error'
    }
  },
  {
    files,
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks)
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
]

export const stylistic: TSESLint.FlatConfig.ConfigArray = [
  {
    files,
    rules: {
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-closing-bracket-location': [
        'error',
        {
          nonEmpty: 'after-props',
          selfClosing: 'tag-aligned'
        }
      ]
    }
  }
]
