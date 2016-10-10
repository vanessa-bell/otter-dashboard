//controller
var mongoose = require('mongoose');
var Otter = mongoose.model('Otter');

module.exports = {
	showAll: function(req, res) {
		Otter.find({},function(err, otters) {
			if(err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully retrieved otters.');
			}
		res.render('index',{otters:otters});
		})
	},
	create: function(req,res) {
		var otter = new Otter({name: req.body.name, age: req.body.age, color: req.body.color});
		otter.save(function(err) {
			if(err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully added an otter');
				res.redirect('/');
			}
		})
	},
	showProfile: function(req,res) {
		Otter.findOne({_id:req.params.id}, function(err,otter) {
			if(err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully retrieved this otter',otter.name);
				res.render('profile',{otter:otter})
			}
		})
	},
	showEdit: function(req,res) {
		Otter.findOne({_id:req.params.id}, function(err,otter) {
			if(err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully retrieved this otter: ',otter.name);
				res.render('edit',{otter:otter})
			}
		})
	},
	update: function(req,res) {
		Otter.update({_id:req.params.id},{'name':req.body.name,'age':req.body.age,'color':req.body.color}, function(err,otter){
			if(err) {
				console.log('bad request')
			}
			else {
				console.log('success')
			}
	res.redirect('/');
		})
	},
	delete: function(req,res) {
		Otter.remove({_id:req.params.id}, function(err,otter) {
			if(err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully deleted')
				res.redirect('/');
			}
		
		})
	}
}