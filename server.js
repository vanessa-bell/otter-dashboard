//requirements
var express = require("express");
var path = require("path");
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

// Setting Server to Listen on Port: 5000
app.listen(app.get('port'), function() {
    console.log("otter-dashboard listening on port 5000");
})



