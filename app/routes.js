var mongoose = require('mongoose');
var User = require('./models/user');
var Post = require('./models/post');
var session = require('express-session');

module.exports = function(app, db) {

  app.get('/user/:id', (req, res) => {
	User.findById({
		_id: req.params.id
	}, (err, user) => {
		if(err) res.send(500);
		if(!user) return res.send(401);
		res.send(user);
	});	
  });

  app.post('/user', (req, res) => {
	User.find({
		username: req.body.username,
		password: req.body.password,
	}, (err, user) => {
		if(err) throw err;
		if(user.length ==0) return res.send(401);
		res.send(user);
	});	
  });

  app.get('/post', (req, res) => {
	Post.find((err, posts) => {
		if(err) throw err;
		res.json(posts);
	});	
  });

  app.post('/post', (req, res) => {
  	var post = new Post({
  		title: req.body.title,
  		body: req.body.body,
  	});
  	post.save(function(err){
  		if(err) throw err;
  	})
  });

  app.delete('/post/:id', (req, res) => {
  	Post.remove({
  		_id : req.params.id
  	}, (err, post) => {
  		if(err) res.send(err);
  		Post.find((err, post) => {
  			if(err) res.send(err)
  			res.json(post);
  		});
  	});
  });

  //load the html file
  app.get('/', function(req, res){
	res.sendFile('index.html', {'root': './'});
  });


app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));
app.get('/', function(req, res, next) {
  var sessData = req.session;
  sessData.someAttribute = "foo";
  res.send('Returning with some text');
});

app.get('/', function(req, res, next) {
  var someAttribute = req.session.someAttribute;
  console.log(`This will print the attribute I set earlier: ${someAttribute}`);
});
}