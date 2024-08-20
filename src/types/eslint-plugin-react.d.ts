declare module 'eslint-plugin-react' {
  const plugin: {
    configs: {
      flat: {
        'recommended': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
        'all': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
        'jsx-runtime': import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
      }
    }
  }

  export default plugin
}
