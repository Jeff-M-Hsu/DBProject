app.post('/notes', (req, res) => {
	res.send('hello')
})



//load the html file
app.get('*', function(req, res){
	res.sendfile('./index.html');
});