#!/usr/bin/env node

const path = require('path')
const { exec, spawn } = require('child_process')

function installHook (action) {
  const source = path.join(__dirname, 'hooks', `${action}.hook`)
  const target = path.join('.git', 'hooks', action)
  exec(`cp -f ${source} ${target}`, () => {
    exec(`chmod ${target}`)
  })
}

installHook('pre-commit')
