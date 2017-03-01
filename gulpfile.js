'use strict'
var gulp = require('gulp');
const exec = require('child_process').exec

gulp.task('build', ()=> {
	exec('node ./scripts/gitbook-build.js');
});

gulp.task('deploy', ()=> {
	exec('node ./scripts/deploy.js');
})
