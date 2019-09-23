var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("hi whatsupp");
});

app.get('/about-us', function(req,res){
	res.send("hi i am sunakshi !");
});

app.listen(3000);