"use strict";

require("@babel/register");

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
var port = 3000;

var routes = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors()); // Routes

app.use(routes.router);
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
//# sourceMappingURL=server.js.map