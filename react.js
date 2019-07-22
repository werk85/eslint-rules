module.exports = {
  extends: [
    'werk85/modern',
    'plugin:react/recommended',
  ],
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
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off'
  }
}