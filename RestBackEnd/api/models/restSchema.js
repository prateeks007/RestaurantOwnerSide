const mongoose = require("mongoose");
const restSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    rating: Number,
    wallet: Number,
    restStatus: Boolean,
    dishName: Array,
    dishPrice: Array

});
module.exports = mongoose.model('Rest', restSchema);