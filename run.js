#!/usr/bin/env node
const path = require('path')
const { exec } = require('child_process')
const cwd = process.cwd()
const pkgJsonScript = require(path.join(cwd, 'package.json'))['git-hooks']

const run = (filename) => {
  const script = filename.toString().split('-').join('')
  const command = pkgJsonScript[script] || pkgJsonScript[`${filename}`]
  if (command) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error)
        return process.exit(1)
      };
      if (stdout) {
        console.log(process.stdout)
        return process.exit(0)
      }
      if (stderr) {
        console.error(process.stderr)
        return process.exit(1)
      }
    })
  }
}

run(process.argv[2])
