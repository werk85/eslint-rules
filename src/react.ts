import { Linter } from 'eslint'

const config: Linter.Config = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/void-dom-elements-no-children': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-no-constructed-context-values': 'error'
  }
}

export = config
