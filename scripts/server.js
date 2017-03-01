var express = require('express');
var app = express();

app.use(express.static('./gh-pages'));

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Servidor escuchando en http://%s:%s', host, port);

});
