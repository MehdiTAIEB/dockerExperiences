var express = require('express');
var router = express.Router();
var Video = require('../models/videos.js');

router.get('/', function(req,res,next) {
	Video.find().limit(5).exec(function(err, vids) {
		res.send(vids);
	});
});

router.post('/', function(req, res, next) {
	Video.create({name: req.body.name, description: req.body.description}, function (err, video) {
		if (err)
			return handleError(err);
		else
			res.send(video);
	});
})
module.exports = router;