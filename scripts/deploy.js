'use strict'

var
    ghpages = require('gh-pages'), //Incluimos el módulo gh-pages.
    exec = require('child_process').execSync,
    repo = require('../package.json').repository;


var
    git_repo = repo.url, //Almacenamos la url del repositorio en GitHub.
    gitbook_repo = repo.gitbook; //Almacenamos la url del repositorio en Gitbook.



//Deploy a Github
ghpages.publish('./gh-pages', {
    repo: git_repo,
    logger: function(m) {console.error(m);}
    },
    (error) => {
        if(error) {
            console.error('Algo salió mal :(');
        }else {
            console.log('gh-pages actualizado');
        }
    });

//Deploy a Gitbook
exec(`git push --force ${gitbook_repo} master`, (error, stdout, stderr)=> {
    if (error) {
        console.error(`exec error deploying to gitbook: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log("Deploy a Gitbook realizado");
});
