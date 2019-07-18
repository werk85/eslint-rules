# eslint-config-werk85

**Note:** Currently only Typescript Projects are supported.

**Note:** We are currently unable to publish the package on `npm` because of our `85` which is interpreted as a year. Use the Git-URL instead.

## Installation

```sh
yarn add eslint-config-werk85 eslint -D
```

## Usage

Create a `.eslintrc.js` file in your project root and add the following content

```js
module.exports = {
  extends: [
    'werk85/modern'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
```

For convinience you can add the following npm scripts to your `package.json`

```json
{
  "scripts": {
    "lint": "eslint --ext .ts,.tsx src",
    "lint:fix": "eslint --ext .ts,.tsx --fix src"
  }
}
```

### Error: Unable to resolve path to module

If this error occurs set the `import/resolver` typescript directory in your `.eslintrc.js` file to the path of the `tsconfig.json` file that defines the module `paths` parameter.

```js
module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        directory: 'path to your tsconfig.json'
      }
    }
  }
}
```

### VSCode

If you use VSCode make sure you add the following configurations to your `settings.json` (Press `CMD + ,` on your keyboard)

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

This enables the automatic fixing of errors on save and enables eslint to validate typescript files.
