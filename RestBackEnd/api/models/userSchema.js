const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        require: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, require: true }
    ,
    restName: {
        type: String
    },
    address: {
        type: String
    }
    ,
    city: {
        type: String
    }
    ,
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    restNumber: {
        type: Number
    },
    restStatus: { type: Boolean, require: true }

});
module.exports = mongoose.model('User', userSchema);