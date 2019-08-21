const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var buyEventSchema = new Schema({
    bName: String,
    bPhone: String,
    bEmail: String,
    bOccupation: String,
    bBudget: Number,
    bPrice: Number,
    create: {
        type: Date,
        default: Date.now()
    }
});

module.exports = buyEventSchema;