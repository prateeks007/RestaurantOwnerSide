const mongoose = require("mongoose");
const restSchema = mongoose.Schema({
    info_id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    rating: Number,
    wallet: Number
});
module.exports = mongoose.model('Rest', restSchema);