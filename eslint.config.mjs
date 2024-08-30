import * as werk85 from '@local/eslint-config-werk85'
import * as prettier from '@local/eslint-config-werk85/prettier'

/**
 * @type { import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray }
 */
const config = [
  {
    ignores: ['.yarn', 'node_modules', 'dist']
  },
  ...werk85.recommended,
  ...werk85.stylistic,
  ...prettier.stylistic
]

export default config
