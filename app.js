var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('esto se acual 50');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escdo a http://%s:%s', host, port);
});
