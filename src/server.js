const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/extract', (req, res) => {
    let body = req.body;
    
    console.log(body);
    // Stringify body
    let response = JSON.stringify(body);

    res.send(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

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