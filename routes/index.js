var express = require('express');
var router = express.Router();
var fs = require ('fs');
/* GET home page. */
router.get('/', function(req,res,next) {
	var data=fs.readFileSync('public/index.txt','utf-8')
	 data=data.split(':')
	 data=data[1]
	 data++
	fs.writeFile('public/index.txt','访问次数:'+data,function(err){
		res.render('index', { title: data });
	})
});
router.get('/a', function(req, res, next) {
	var data=fs.readFileSync('public/gx.txt','utf-8')
	data=data.split(':')
	data=data[1]
	data++
	fs.writeFile('public/gx.txt','访问次数:'+data,function(err){
		res.render('gx', { title: data});
	})
});
module.exports = router;
