var express = require('express');
var app = express();
var bodyparser = require('body-parser')
var port = process.env.PORT || 5000
var listings = require('./routes/listings')

var rentals = require('./routes/rentals')

var mongooseConnection = require('./modules/db.js');


app.use(bodyparser.json());

app.use(express.static('server/public'));

// mongooseConnection.connect();


app.use('/listings', listings);

app.use('/rentals', rentals)


app.listen(port, function(){
    console.log('listening on port', port);  
});