var express = require('express');
var app = express();							//create app using express
var mongoose = require('mongoose');				//mongoose for mongodb
var morgan = require('morgan');					//morgan logs requests to console
var bodyParser = require('body-parser');		//pull information from HTML POST
var methodOverride = require('method-override');//simulates DELETE and PUT

mongoose.connect('mongodb://jeffhsu:mongouser1@ds018238.mlab.com:18238/testdatabase');
app.use(express.static(__dirname));				//set static files location, /public/img will be /img for users
app.use(morgan('dev'));										//dev option logs every request to console
app.use(bodyParser.urlencoded({'extended':'true'}))			//parse app/x-www-form-urlencoded
app.use(bodyParser.json());									//parse app/json
app.use(bodyParser.json({type:'application/vnd.api+json'}));//parse app/vnd.api+json as json
app.use(methodOverride());

//start app with node server.js
app.listen(8080);
//view with localhost:8080
console.log("App listening on port 8080");