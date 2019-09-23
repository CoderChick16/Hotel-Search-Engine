var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/paid/:shambu?', function(req, res, next){
	if(req.params.shambu){
		var shambuKiValue = req.params.shambu;
		res.send("The value of SHAMBU is "+shambuKiValue);
		
	} 
	res.send('Hi mai hu sona, aur mainey paise diye hai. Meri subscription hai');
});

module.exports = router;
