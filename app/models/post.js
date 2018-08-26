var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
{
	title: {type: String},
	body: {type: String},
});

module.exports = mongoose.model('Post', PostSchema);