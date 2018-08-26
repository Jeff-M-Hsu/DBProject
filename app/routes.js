var mongoose = require('mongoose');
var User = require('./models/user');
var Post = require('./models/post');
module.exports = function(app, db) {

  app.get('/user/:id', (req, res) => {
	User.findById({
		_id: req.params.id
	}, (err, user) => {
		if(err) throw err;
		if(!user) return res.send(401);
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
}