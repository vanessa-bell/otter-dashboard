//requirements
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var mongodbUri = 'mongodb://heroku_4d0hdbl4:vfrsf00pkkc12mgta1kmp8st41@ds035816.mlab.com:35816/heroku_4d0hdbl4';
var fs = require('fs');
var path = require('path');
//app declaration
var app = express();
var bodyParser = require("body-parser");
//app.use
app.use(bodyParser.urlencoded({extended: true}));
app.use('/client/static',express.static(__dirname + "/client/static"));

//app settings
app.set('views',path.join(__dirname, './client/views'));
app.set('view engine','ejs');
app.set('port', (process.env.PORT || 5000));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);




mongoose.connect('mongodb://localhost/mongoose_dashboard');
var models_path = path.join(__dirname, './server/models');
fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >=0) {
		require(models_path + '/' +file);
	}
});

// Setting Server to Listen on Port: 5000
app.listen(app.get('port'), function() {
    console.log("otter-dashboard listening on port 5000");
})


