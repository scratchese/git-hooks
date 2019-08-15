#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const HOOKS = require('./hooks');
const hookPathList = HOOKS.map(hook=>path.join('.git', 'hooks', hook));

const generatedByGitHooks = '# git-hooks'

function isGeneratedByGitHooks(hook) {
    if (fs.existsSync(hook)) {
        const d = fs.readFileSync(hook, 'utf-8')
        return d.indexOf(generatedByGitHooks) !== -1;
    }
    return false
}

function removeHook(hook) {
    fs.unlinkSync(hook)
}

if (fs.existsSync('.git')) {
    hookPathList.filter(isGeneratedByGitHooks).forEach(removeHook)
}else{
    console.log('[git-hooks]', 'No .git folder found, skip git-hooks uninstallation')
}
