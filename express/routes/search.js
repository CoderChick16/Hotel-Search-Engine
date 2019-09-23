var express = require('express');
var router = express.Router();
var user = require('../models/properties');

var u = new user("Vipul", "Sharma");
var fullName = u.fullName();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var querySearched = req.query.hola;
  res.send('You searched: '+querySearched + fullName);
});

router.get('/paid/:shambu?', function(req, res, next){
	if(req.params.shambu){
		var shambuKiValue = req.params.shambu;
		res.send("The value of SHAMBU is "+shambuKiValue);
		
	} 
	res.send('Hi mai hu sanju, aur mainey paise diye hai. Meri subscription hai');
});


module.exports = router;


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/Stayzone';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});