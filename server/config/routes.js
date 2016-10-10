var otters = require('../controllers/otters.js');

module.exports = function(app) {
	//displays all otters:
	app.get('/',function(req,res) {
		otters.showAll(req,res);
	});

	//displays form for making a new otter
	app.get('/otters/add',function(req,res) {
		res.render('add');
	});

	//displays info about ONE otter:
	app.get('/otters/:id',function(req,res) {
		otters.showProfile(req,res);
	});

	//route for adding the new otter
	app.post('/otters', function(req,res) {
		otters.create(req,res);
	});

	//displays form to edit an existing otter
	app.get('/otters/:id/edit', function(req,res) {
		otters.showEdit(req,res);
	});

	//post route for editing the otter
	app.post('/otters/:id', function(req,res) {
		otters.update(req,res);
	});
		
	//post route for deleting an otter by ID
	app.post('/otters/:id/destroy',function(req,res) {
		otters.delete(req,res);
	});
}