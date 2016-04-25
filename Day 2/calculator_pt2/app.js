// BASE SETUP
// =============================================================================

// call the packages we need
var mysql      = require('mysql');
var cors      = require('cors');
var express    = require('express');        // call express
var bodyParser = require('body-parser');

var app = express();

var router = app.Router(); // get an instance of the express Router

router.get('/', function(req, res) {
	res.json({ message: 'Hooray! Welcome to our server!' });   
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
