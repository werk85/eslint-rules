# eslint-config-werk85

**Note:** Currently only Typescript Projects are supported.

## Installation

```sh
yarn add eslint-config-werk85 eslint -D
```

## Included plugins

Following plugins are included in `werk85/modern`:

* [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
* [import](https://github.com/import-js/eslint-plugin-import)
* [jest](https://github.com/jest-community/eslint-plugin-jest)
* [prettier](https://github.com/prettier/eslint-plugin-prettier)

Please consult the documentation of each plugin for further rule explanation.

### React

The following plugins are added addtionally to `werk85/react`:

* [react](https://github.com/yannickcr/eslint-plugin-react)
* [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

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

If you use VSCode install the [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and make sure you add the following configurations to your `settings.json`. You can access the settings by pressing `CMD + ,` on your keyboard and click on the `Open Settings (JSON)` icon in the upper right corner.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

This enables the automatic fixing of errors on save and enables eslint to validate typescript files.
