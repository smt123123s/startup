const mongoose = require('mongoose');
let productSchema = require('../schema/productSchema');

var productModel = mongoose.model('product', productSchema);

module.exports = productModel;