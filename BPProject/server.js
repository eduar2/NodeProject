var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()) // for parsing application/json

var routes = require('./api/routes');
routes(app);
app.listen(port, function(err) {
    
   console.log('Server started on port: ' + port);
});