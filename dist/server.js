"use strict";

require("@babel/register");

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = 3000;
app.use(bodyParser.json());
app.post('/api/extract', function (req, res) {
  var body = req.body;
  console.log('asdf', body); // Stringify body

  var response = JSON.stringify(body);
  res.send(response);
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
//# sourceMappingURL=server.js.map