// BASE SETUP
// =============================================================================

// call the packages we need
var mysql      = require('mysql');
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

router.get('/', function(req, res) {
  res.json({ message: 'The server got the GET request!' });
});
router.post('/', function(req, res) {
  console.log("req", req.body);
  var post  = {
    Value1: req.body.Value1,
    Value2: req.body.Value2,
    Operand: req.body.Operand,
    Result: req.body.Result
  };

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : 'password',
    database : 'calculator'
  });

  connection.connect();

  var query = connection.query('INSERT INTO entries SET ?', post, function(err, result) {
    if (err) throw err;

    res.json({ message: 'Insertion was successful' });
  });

  connection.end();

});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
