var express = require('express');

var app = express.createServer(express.logger());
var fs = require ("fs");
var buffer = new Buffer(256); 

app.get('/', function(request, response) {
  buffer = fs.readFileSync('./index.html');
  var k = buffer.toString(); 

  response.send('Start');
  response.send(k);
  response.send('End');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
