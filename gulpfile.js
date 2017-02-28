var gulp = require('gulp');
const exec = require('child-process').exec

gulp.task('build', function(){
	exec('node ./scripts/generate-gitbook.js');
};
