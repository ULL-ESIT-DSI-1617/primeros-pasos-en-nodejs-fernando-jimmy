'use strict'

var
    ghpages = require('gh-pages'), //Incluimos el módulo gh-pages.
    exec = require('child_process').exec,
    repo = require('../package.json').repository;


var
    git_repo = repo.url, //Almacenamos la url del repositorio en GitHub.
    gitbook_repo = repo.gitbook; //Almacenamos la url del repositorio en Gitbook.



//Deploy a Github
ghpages.publish('./gh-pages', {repo: git_repo, logger: function(m) {console.error(m);}});

//Deplor a Gitbook
exec(`git push ${gitbook_repo} master`, (error, stdout, stderr)=> {
    if (error) {
        console.error(`exec error deploying to gitbook: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
