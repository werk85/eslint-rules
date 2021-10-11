# eslint-config-werk85

## Installation

```sh
yarn add eslint-config-werk85 eslint@7 -D
```

## Usage

Create a `.eslintrc.json` in the root of your project with the following content.

```json
{
  "root": true,
  "extents": "werk85",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Now add the following `lint:es` and `lint:es:fix` scripts to your root `package.json`:

```json
{
  ...
  "scripts": {
    "lint:es": "yarn eslint .",
    "lint:es:fix": "yarn eslint --fix ."
  }
  ...
}
```

### Monorepo Usage

In a monorepo setup is the configuration a little bit different. You need to extend the configuration as described in the following JSON snippet and add the `scripts` to each `packages/*/package.json` file. Then run the linting in all sub packages with `lerna` or `yarn` workspace tools.

```json
{
  "root": true,
  "extends": "werk85",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "overrides": [
    // This makes sure you can use commonjs `require` calls in `js` files that are included in your `tsconfig.json` files.
    {
      "files":  ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    // Exclude this
    {
      "files": ["packages/*/test/**"],
      "extends": ["werk85", "werk85/jest"],
      "parserOptions": {
        "project": "./test/tsconfig.json"
      }
    }
  ]
}
```

The configuration expects that you have in each project root, `packages/*` and `packages/*/test` directory a `tsconfig.json` that `includes` or `excludes` all files you want to lint. For linting of `*.js` files make sure you set `allowJs: true` in your root `tsconfig.json` if you extend all other configurations from it or in each individually.

#### Extending the Monorepo Base Configuration

If you need to extend a configuration e.g. for using the `werk85/react` ruleset in your frontend package, you need to create a `.eslintrc.js` file in the folder for which the new configuration should be applied and copy the following code.

```js
const path = require('path')

const project = path.join(__dirname, 'tsconfig.json')

module.exports = {
  extends: 'werk85/react',
  parserOptions: {
    project
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
}
```

This base configuration can now be adjusted to your needs. It is important to define the `project` properties as absolute paths else it can happen that `eslint` uses the wrong `tsconfig.json`.

If you want to lint the `.eslintrc.js` file in your project you need to explicitly add the file in your `tsconfig.json`s `includes` property. Hidden files are excluded by default from typescript projects.

## Included Configurations

### Base Configuration

Following plugins are included in `werk85`:

* [deprecation](https://github.com/gund/eslint-plugin-deprecation)
* [import](https://github.com/import-js/eslint-plugin-import)
* [prettier](https://github.com/prettier/eslint-plugin-prettier)
* [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

Please consult the documentation of each plugin for further rule explanation.

### React

The following plugins are added addtionally to `werk85/react`:

* [react](https://github.com/yannickcr/eslint-plugin-react)
* [react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

### Jest

The following plugins are added addtionally to `werk85/jest`:

* [jest](https://github.com/jest-community/eslint-plugin-jest)

This configuration can be added as follows to yours `.eslintrc.json`:

```json
{
  "overrides": [
    {
      "files": "test/**",
      "extends": ["werk85", "werk85/jest"],
      "parserOptions": {
        "project": "./test/tsconfig.json"
      }
    }
  ]
}
```

### Error: Unable to resolve path to module

If this error occurs set the `import/resolver` typescript directory in your `.eslintrc.json` or `.eslintrc.js` file to the path of the `tsconfig.json` file that defines the module `paths` parameter.

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
