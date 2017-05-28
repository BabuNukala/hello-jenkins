var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 5000);

module.exports = app;