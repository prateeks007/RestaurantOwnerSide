const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../auth/check-auth');

const Dish = require("../models/dishSchema");
router.post('/addDish', (req, res, next) => {
    const dish = new Dish({
        dish_id: new mongoose.Types.ObjectId(),
        user_id: req.body.user_id,
        dish_name: req.body.dish_name,
        dish_expl: req.body.dish_expl,
        dish_price: req.body.dish_price
    });
    dish
        .save()
        .then(
            result => {
                console.log(result);
                res.status(200).json({
                    message: "Dish added successfully",
                    result: result
                });
            }
        ).catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });

});
router.post('/getDish', (req, res, next) => {
    Dish.find({ user_id: req.body.user_id })
        .select("dish_name dish_id dish_expl dish_price")
        .exec()
        .then(result => {
            if (result < 1) {
                return res.status(401).json({
                    message: "No Dishes found Sorry"
                })
            }
            console.log(result);
            res.status(200).json(result);

        })
        .catch(err => {
            console.log(err); res.status(500).json({
                error: err
            });
        });

});
router.delete('/deleteDish/:productId', (req, res, next) => {
    const id = req.params.productId;
    Dish.remove({ dish_id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Dish deleted successfully",
                dish_detail: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});




module.exports = router;