"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = 3000;
app.use(bodyParser.json());
app.post('/api/extract', function (req, res) {
  var body = req.body;
  console.log(body); // Stringify body

  var response = JSON.stringify(body);
  res.send(response);
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
/*
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
*/
//# sourceMappingURL=server.js.map