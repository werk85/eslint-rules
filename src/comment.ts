import { TSESLint } from '@typescript-eslint/utils'

export const stylistic: TSESLint.FlatConfig.Config = {
  rules: {
    '@stylistic/spaced-comment': ['error', 'always'],
    '@stylistic/line-comment-position': ['error', 'above'],
    '@stylistic/lines-around-comment': [
      'error',
      {
        allowInterfaceStart: true,
        allowTypeStart: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false
      }
    ],
    '@stylistic/multiline-comment-style': ['off']
  }
}
