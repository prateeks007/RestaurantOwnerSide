const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const checkAuth = require('../auth/check-auth');
const Rest = require("../models/restSchema");


router.get('/', checkAuth, (req, res, next) => {
    Rest.find()
        .select("user rating wallet restStatus")
        .exec()
        .then(docs => {
            const response = {
                length: docs.length,
                data: docs.map(doc => {
                    return {
                        info_id: doc.info_id,
                        user: doc.user,
                        rating: doc.rating,
                        wallet: doc.wallet,
                        restStatus: doc.restSatus,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + doc.info_id
                        }
                    }
                })

            };
            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err); res.status(500).json({
                error: err
            });
        });

});

router.post('/', checkAuth, (req, res, next) => {

    const slots = new Rest({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.userId,


    });
    slots
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "New item registered in database",
                createdSlots: {
                    length: result.length,
                    data: {
                        _id: result._id,
                        className: result.className,
                        faculty: result.faculty,
                        students: result.students,
                        action: result.action,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + result._id
                        }
                    }
                }
            });
        })

        .catch(err => {
            console.log(err),
                res.status(500).json({
                    message: "error in post req",
                    error: err
                });
        });

});

router.post('/:productId', checkAuth, (req, res, next) => {

    res.status(200).json({
        message: "handling the post requests for products for specific id",
        productId: req.params.productId

    });
});
router.patch('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Rest.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Update is successfully done",
                request: {
                    type: "GET",
                    url: 'http://localhost:3000/products/' + id
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
router.delete('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId;
    Rest.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Item deleted successfully",
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/products/' + result._id,
                    data: {
                        className: "STRING",
                        faculty: "STRING",
                        student: "INTEGER",
                        action: "STRING"
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;