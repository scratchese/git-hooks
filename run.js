#!/usr/bin/env node
const { exec } = require('child_process')
const cwd = process.cwd()

const command = process.argv[1];

exec(`${command}`, {cwd});
