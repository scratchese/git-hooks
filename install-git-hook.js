#!/usr/bin/env node
const path = require('path')
const { exec } = require('child_process')
const precommitSrc=path.join(__dirname, 'hooks', 'pre-commit.hook')
const precommitPath=path.join('.git', 'hooks', 'pre-commit')
// const prepushPath = path.join('.git', 'hooks', 'pre-push')
exec(`cp -f ${precommitSrc} ${precommitPath}`);
