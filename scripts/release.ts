import cp from 'child_process'

cp.execFileSync('npm', ['publish'], { cwd: 'lib', stdio: 'inherit' })
