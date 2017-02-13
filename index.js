var express = require('express');
var app = express();

var fs = require('fs');
var testData = JSON.parse(fs.readFileSync('./public/test.json', 'utf8'));

app.get('/data/', function(req, res) {
	res.type('text/plain');
	res.json(testData);
});

app.use('/', express.static(__dirname + '/public/'));
//http://127.0.0.1:8080/
app.listen(8080);
