var repo = require('./package.json');

//Almacenamos la url del repositorio en GitHub.
var url_repo = repo.repository.url;

//Incluimos el módulo gh-pages.
var ghpages = require('gh-pages');

//Llamamos a la función publish.
ghpages.publish('./gh-pages', {repo: url_repo, logger: function(m) {console.error(m);}});

