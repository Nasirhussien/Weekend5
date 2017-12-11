var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var realEstateSchema = new Schema({
    cost: {type: Number},
    sqft: {type: Number},
    city: {type: String}
})

module.exports = mongoose.model('RealEstate', realEstateSchema, 'listings');
