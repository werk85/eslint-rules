declare module 'eslint-plugin-jest' {
  const plugin: {
    configs: {
      'flat/all': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
      'flat/recommended': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
      'flat/style': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
    }
  }

  export default plugin
}
