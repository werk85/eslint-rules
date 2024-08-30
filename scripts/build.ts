import fs from 'fs'
import path from 'path'
import pkg from '../package.json'

const DIST = 'dist'

const sanitizedPackageJson = JSON.stringify(
  Object.fromEntries(
    Object.entries(pkg).filter(([key]) =>
      [
        'name',
        'version',
        'repository',
        'author',
        'license',
        'main',
        'modules',
        'types',
        'exports',
        'dependencies',
        'peerDependencies'
      ].includes(key)
    )
  ),
  undefined,
  2
)

fs.writeFileSync(`${DIST}/package.json`, sanitizedPackageJson, 'utf8')

// mimic subpatch exports for node10 (legacy support)
Object.entries(pkg.exports)
  .filter(([key]) => key !== '.')
  .map(([key, value]) => ({
    module: key,
    content: JSON.stringify(
      {
        main: path.relative(DIST, value.default),
        module: path.relative(DIST, value.import),
        typings: path.relative(DIST, value.types),
        sideEffects: false
      },
      null,
      2
    )
  }))
  .forEach(({ module, content }) => {
    fs.mkdirSync(path.join(DIST, module))
    fs.writeFileSync(path.join(DIST, module, 'package.json'), content, 'utf8')
  })
