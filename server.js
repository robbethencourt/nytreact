// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
var databaseUrl = 'nytreact';
var collections = ["articles"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
  console.log('MongoDB Error: ', err);
});


// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){

  res.sendFile('./public/index.html');
  
});

// get data from the db. The api route will be accessed by helpers.js
app.get('/api', function(req, res) {

	// grab all the articles in the database
	db.articles.find({}).sort({article_pub_date: -1}, function(err, docs) {

		if (err) throw err;

		console.log('these are the docs: ' + docs);
		res.send(docs);

	}); // end db.articles.find()

}); // end app.get()

// post data to the db. the api route will be accessed by helpers.js
app.post('/api/', function(req, res) {

	// save the article object which has the article title, url and publish date to the article variable
	var article = req.body;

	// console.log(article);

	// insert the article into the db
	db.articles.insert(article, function(err) {

		if (err) throw err;

		console.log('saved to db');

	}); // end db.articles.insert()

}); // end app.post()

// delete data from the db
app.delete('/api/', function(req, res) {
	var article = req.body;
	console.log(article);
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});