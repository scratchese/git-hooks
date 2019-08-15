#!/usr/bin/env node
const path = require('path')
const { exec } = require('child_process')
const cwd = process.cwd()
const pkgJsonScript = require(path.join(cwd, 'package.json'))['scripts']
const precommitPath = path.join('.git', 'hooks', 'pre-commit')
// const prepushPath = path.join('.git', 'hooks', 'pre-push')

exec(`rm -rf ${precommitPath}`, () => {
  exec(`touch ${precommitPath}`, () => {
    exec(`echo "#!/bin/sh" > ${precommitPath}`, () => {
      exec(`echo ${pkgJsonScript['precommit']} >> ${precommitPath}`)
    });
  });
});
