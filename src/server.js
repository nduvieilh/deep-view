require("@babel/register");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/extract', (req, res) => {
    let body = req.body;
    
    console.log('adsf', body);
    // Stringify body
    let response = JSON.stringify(body);

    res.send(response); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));