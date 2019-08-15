#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const HOOKS = require('./hooks')

// in the preuninstall stage
// process.cwd() === __dirname
// so we need to jump up three level here
const root = path.join(__dirname, '../../..')
const hookPathList = HOOKS.map(hook => path.join(root, '.git', 'hooks', hook))

const generatedByGitHooks = '# git-hooks'

function isGeneratedByGitHooks (hook) {
  if (fs.existsSync(hook)) {
    const d = fs.readFileSync(hook, 'utf-8')
    return d.indexOf(generatedByGitHooks) !== -1
  }
  return false
}

function removeHook (hook) {
  fs.unlinkSync(hook)
}

if (fs.existsSync(path.join(root, '.git'))) {
  hookPathList.filter(isGeneratedByGitHooks).forEach(removeHook)
} else {
  console.log('[git-hooks]', 'No .git folder found, skip git-hooks uninstallation')
}
