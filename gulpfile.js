'use strict'
var gulp = require('gulp');
const exec = require('child_process').execSync

gulp.task('build', ()=> {
	exec('node ./scripts/gitbook-build.js', (error, stdout, stderr)=> {
	    if (error) {
	        console.error(`exec error build gitbook: ${error}`);
	        return;
	    }
	    console.log(`stdout: ${stdout}`);
	    console.log(`stderr: ${stderr}`);
	    console.log("Deploy a Gitbook realizado");
	});
});

gulp.task('serve', ()=> {
	exec('node ./scripts/server.js');
});

gulp.task('deploy', ['build'], ()=> {
	exec('node ./scripts/deploy.js', (error, stdout, stderr)=> {
	    if (error) {
	        console.error(`exec error deploy task: ${error}`);
	        return;
	    }
	    console.log(`stdout: ${stdout}`);
	    console.log(`stderr: ${stderr}`);
	    console.log("Deploy a Gitbook realizado");
	});
})
