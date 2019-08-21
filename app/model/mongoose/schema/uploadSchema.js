const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var uploadSchema = new Schema({
    uName : String,
    uPhone: String,
    uEmail: String,
    uOccupation: String,
    uRevenue: Number,
    uPrice: Number,
    createAt: {
            type: Date,
            default: Date.now()
    }
});


module.exports = uploadSchema;
