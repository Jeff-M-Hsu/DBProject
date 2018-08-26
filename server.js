var express = require('express');
var app = express();							//create app using express
var mongoose = require('mongoose');				//mongoose for mongodb
var morgan = require('morgan');					//morgan logs requests to console
var bodyParser = require('body-parser');		//pull information from HTML POST
var methodOverride = require('method-override');//simulates DELETE and PUT
const db = require('./config/db');

app.use(bodyParser.urlencoded({'extended':'true'}))			//parse app/x-www-form-urlencoded
app.use(bodyParser.json());									//parse app/json
app.use(bodyParser.json({type:'application/vnd.api+json'}));//parse app/vnd.api+json as json
app.use(express.static(__dirname));				//set static files location, /public/img will be /img for users
app.use(morgan('dev'));										//dev option logs every request to console
app.use(methodOverride());
require('./app/routes')(app, {});

mongoose.connect(db.url,(err, database) => {
  if (err) return console.log(err);

//start app with node server.js
app.listen(8000);
//view with localhost:8080
console.log("App listening on port 8000");
})