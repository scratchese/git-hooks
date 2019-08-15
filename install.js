#!/usr/bin/env node

const path = require('path')
const { exec } = require('child_process')

const HOOKS = [
  'pre-commit',
  'pre-push'
]

function installHook (hook) {
  const source = path.join(__dirname, 'hooks', `template.hook`)
  const target = path.join('.git', 'hooks', hook)
  exec(`cp -f ${source} ${target}`, () => {
    exec(`chmod ${target}`)
  })
};

HOOKS.forEach(installHook)


