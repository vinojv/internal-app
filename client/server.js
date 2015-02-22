/**
* this is a server for client - depricated
**/

var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(5080, function(){
    console.log("connected to 5080");
});
