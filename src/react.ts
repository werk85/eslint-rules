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
    'react/prop-types': 'off'
  }
}

export = config
