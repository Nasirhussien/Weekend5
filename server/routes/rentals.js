var express = require('express');
var router = express.Router();
var Rentals = require('../models/rentals.schema');



router.get('/', function(req, res){
    Rentals.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with real estate find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.post('/', function(req, res){
    var addRental = new Rentals(req.body);

    addRental.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with game save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});






module.exports = router