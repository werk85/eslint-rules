import cp from 'child_process'
import pkg from '../package.json'

cp.execFileSync('yarn', ['publish', '--new-version', pkg.version], { cwd: 'lib', stdio: 'inherit' })
