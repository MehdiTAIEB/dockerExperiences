var mongoose = require('mongoose');

var Video = mongoose.Schema;

var VideoSchema = new Video({
	name: String,
	description: String
});

module.exports = mongoose.model('video', VideoSchema );