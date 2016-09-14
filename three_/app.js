const express = require('express');
const app = express();
const path = require('path');

module.exports = app;


app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});