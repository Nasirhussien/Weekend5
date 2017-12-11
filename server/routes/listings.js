var express = require('express');
var router = express.Router();
var RealEstate = require('../models/realEstate.schema');



router.get('/', function(req, res){
    RealEstate.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with real estate find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});



router.post('/', function(req, res){
    var addListing = new RealEstate(req.body);

    addListing.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});




module.exports = router