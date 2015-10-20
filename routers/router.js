var User = require('./user');
var fs = require('fs');
var Movies = require('./movies');
var Weather = require('./weather');
var Mail = require('./mail');
var Account = require('./account');
var swig  = require('swig');

module.exports = {
	index:function(req,res){
		console.log(process.env.NODE_ENV)
		// fs.readFile("index.html","utf-8",function(err,data){
		// 	res.send(data);
	 //  	})
		if(process.env.NODE_ENV){
			var page = swig.renderFile('index.html', { production:false});
		}else{
			var page = swig.renderFile('index.html', { production:true});
		}
		
	    res.send(page);
	},
	user: User,
	movies: Movies,
	weather: Weather,
	mail: Mail,
	account: Account
}