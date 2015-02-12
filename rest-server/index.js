var config = require('./config');
var server = require('./lib/server');
var express = require('express');
var path = require('path');

var app = server(config);

var clientPath = path.resolve(app.get('rootPath'), '../client');

// expose client
app.use(express.static(clientPath));

app.use(app.controllers.auth());
app.use(app.controllers.employees());
app.use(app.controllers.upload());

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log(
        app.get('title'),
        'is running at: http://localhost:',
        port
    );

});

module.exports = app;
