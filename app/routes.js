//get all object1s
app.get('/api/object1s', function(req, res){
	//get all object1s from database
	Object1.find(function(err,object1s){
		if(err)
			res.send(err)					//if retrieval error, send error

		res.json(object1s);					//returns all object1s in json format
	});
});

//create object1 and send back all object1s after creation
app.post('/api/object1s', function(req, res){
	//create object1, info comes from Ajax request from angular
	Object1.create({
		text : req.body.text,
		done : false
	}, function(err, object1){
		if(err)
			res.send(err);

		//get and return all object1s after creating another
		Object1.find(function(err, object1s){
			if(err)
				res.send(err)
			es.json(object1s);
		});
	});
});

//delete a object1
app.delete('/api/object1s/:object1_id', function(req, res){
	//require the id of an object 1 to delete
	Object1.remove({
		_id : req.params.object1_id
	}, function(err, object1){
		if(err)
			res.send(err);
		//gets and returns all object1s after deleting
		Object1.find(function(err, object1s){
			if(err)
				res.send(err)
			res.json(object1s);
		});
	});
});

//load the html file
app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});