'use strict'
var gulp = require('gulp');
const exec = require('child_process').execSync

gulp.task('build', ()=> {
	exec('node ./scripts/gitbook-build.js', {stdio:'inherit'});
});

gulp.task('serve', ['build'],()=> {
	exec('node ./scripts/server.js', {stdio:'inherit'});
});

gulp.task('deploy', ['build'], ()=> {
	exec('node ./scripts/deploy.js', {stdio:'inherit'});
})
