const mongoose = require("mongoose");
let uploadSchema = require("../schema/uploadSchema");

var uploadModel = mongoose.model('upload', uploadSchema);

module.exports = uploadModel;