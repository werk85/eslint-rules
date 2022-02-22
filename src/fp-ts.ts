import { Linter } from 'eslint'

const config: Linter.Config = {
  plugins: ['fp-ts'],
  rules: {
    'fp-ts/no-lib-imports': 'error',
    'fp-ts/no-pipeable': 'error',
    'fp-ts/no-redundant-flow': 'error',
    'fp-ts/prefer-bimap': 'error',
    'fp-ts/prefer-chain': 'error',
    'fp-ts/prefer-traverse': 'error'
  }
}

export = config
