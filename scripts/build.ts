import fs from 'fs'
import pkg from '../package.json'

fs.writeFileSync(
  'lib/package.json',
  JSON.stringify(
    Object.fromEntries(Object.entries(pkg).filter(([key]) => !['scripts', 'devDependencies', 'files'].includes(key))),
    undefined,
    2
  ),
  'utf8'
)
