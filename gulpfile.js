'use strict'
var gulp = require('gulp');
const exec = require('child_process').exec

gulp.task('build', ()=> {
	exec('node ./scripts/gitbook-build.js');
});

gulp.task('serve', ()=> {
	exec('node ./scripts/server.js');
});
