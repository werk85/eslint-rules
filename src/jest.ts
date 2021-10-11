import { Linter } from 'eslint'

const config: Linter.Config = {
  extends: ['plugin:jest/all'],
  plugins: ['jest'],
  rules: {
    'jest/lowercase-name': 'off',
    'jest/no-hooks': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-lowercase-title': 'off',
    'jest/unbound-method': 'off'
  }
}

export = config
