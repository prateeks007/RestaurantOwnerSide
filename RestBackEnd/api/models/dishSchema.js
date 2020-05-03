const mongoose = require("mongoose");
const dishSchema = mongoose.Schema({
    dish_id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    dish_name: { type: String, require: true },
    dish_expl: { type: String, require: true },
    dish_price: { type: Number, require: true }
});
module.exports = mongoose.model('Dish', dishSchema);