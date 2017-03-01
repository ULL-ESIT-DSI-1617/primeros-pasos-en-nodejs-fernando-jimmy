'use strict'
const exec = require('child_process').execSync;
console.log("Ejecutanto gitbook build...")

exec('./node_modules/.bin/gitbook build ./txt ./gh-pages', {stdio: 'inherit'});
