'use strict'
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('./gh-pages'));

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Servidor escuchando en el http://${host}:${port}`);
});
