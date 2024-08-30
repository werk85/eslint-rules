declare module 'eslint-plugin-react-hooks' {
  const plugin: {
    configs: {
      recommended: import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
    }
  } & import('eslint').ESLint.Plugin

  export default plugin
}
