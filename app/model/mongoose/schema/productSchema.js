 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var productSchema = new Schema ({
    
    pId: Number,
    pName: String,
    pPosition: String,
    pSum: String,
    pRent: String,
    pRevenue: String,
    pCost: String,
    pLevel: String,
    pArea: String,
    pDescription: Array,
    pCategory: Array,
    pImg: String,
    pTag: Array,
    pReason: String,
    pFormat: String,
    pType: String,

 });

 module.exports = productSchema;