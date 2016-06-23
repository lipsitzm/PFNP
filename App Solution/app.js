// BASE SETUP
// =============================================================================

// call the packages we need
var cors      = require('cors');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/user/', function(req, res) {
	res.json({ id: 1, name: 'Alice', city: 'Denver' });
});
router.post('/user/', function(req, res) {
	console.log("req", req.body);
    res.json({ message: 'POST was received', body: req.body });
});
router.get('/user/:id/city', function(req, res) {
	console.log('Passed in ID:', req.params.id);
	res.json({ id: 1, city: 'Denver' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
