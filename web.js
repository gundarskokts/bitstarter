var express = require('express');

var app = express.createServer(express.logger());
var fs = require ("fs");

app.get('/', function(request, response) {
  filebuffer = fs.readFileSync(index.html);
  response.send(filebuffer.to_string());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
