var express = require('express');

var app = express.createServer(express.logger());
var fs = require ("fs");
var buffer = new Buffer("I am a string buffer", "utf-8"); 

app.get('/', function(request, response) {
  buffer = fs.readFileSync('./index.html');
  console.log("Testing logging string k to console.."); 
  var k = buffer.toString(); 
  console.log(k); 

  // response.write('Start send');
  response.send(k); 
  // response.write('End send');
  // response.end; 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
