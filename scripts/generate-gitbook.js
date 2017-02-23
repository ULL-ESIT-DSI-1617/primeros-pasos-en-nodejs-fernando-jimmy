const exec = require('child_process').exec;

exec('./node_modules/.bin/gitbook build ./txt ./gh-pages', (error, stdout, stderr) => {
	if(error) {
		console.log("Error ejecutando el comando: ${error}");
		return;
	}
	console.log("stdout: ${stdout}");
	console.log("stderr: ${stderr}");
});

