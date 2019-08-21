const mongoose = require('mongoose');
let buyEventSchema = require('../schema/buyEventSchema');

var uploadModel = mongoose.model('buyEvent', buyEventSchema);

module.exports = uploadModel;