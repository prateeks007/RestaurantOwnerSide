const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../auth/check-auth');
const User = require("../models/userSchema");
router.post('/getInfo', (req, res, next) => {
    User.find({ _id: req.body._id })
        .select("email restName address city state zip restNumber")
        .then(result => {
            if (result < 1) {
                return res.status(401).json({
                    message: "No user found Sorry"
                })
            }
            console.log(result);
            res.status(200).json(result);

        }).catch(err => {
            console.log(err); res.status(500).json({
                error: err
            });
        });

})
router.post('/restsignup', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(
            user => {
                if (user.length > 0) {
                    return res.status(409).json({
                        message: "User already exists"
                    })
                }
                else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            });
                        }
                        else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash,
                                restName: req.body.restName,
                                address: req.body.address,
                                city: req.body.city,
                                state: req.body.state,
                                zip: req.body.zip,
                                restNumber: req.body.restNumber

                            });
                            user
                                .save()
                                .then(result => {
                                    console.log(result);
                                    res.status(200).json({
                                        message: "New user Created with",
                                        _id: user._id,
                                        email: user.email,
                                        password: user.password,
                                        restName: user.restName,
                                        address: user.address,
                                        city: user.city,
                                        state: user.state,
                                        zip: user.zip,
                                        restNumber: user.restNumber
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        error: err
                                    });
                                });
                        }
                    });
                }
            }
        );
});
router.patch('/changeInfo/:userId', (req, res, next) => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    User.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Update is successfully done",
                request: {
                    type: "GET",
                    url: 'http://localhost:3000/user/' + id
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
router.get('/justDev', (req, res, next) => {
    User.find()
        .select().exec().then(docs => {
            const response = {
                length: docs.length,
                data: docs.map(doc => {
                    return {
                        message: "All info",
                        _id: doc._id,
                        email: doc.email,
                        password: doc.password,
                        restName: doc.restName,
                        address: doc.address,
                        city: doc.city,
                        state: doc.state,
                        zip: doc.zip,
                        restNumber: doc.restNumber,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + doc._id
                        }
                    };
                })

            };
            res.status(200).json(response);
        });
})

router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(
            user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "Auth failed"
                    })
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        res.status(401).json({
                            error: err
                        })
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id
                        },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "7d"
                            }
                        );
                        return res.status(200).json({
                            message: "successfully login",
                            token: token,
                            email: req.body.email,
                            id: user[0]._id
                        })
                    }
                    res.status(401).json({
                        message: "Auth failed"
                    })
                })

            }).catch(err => {
                res.status(500).json({
                    error: err
                });
            })
})

module.exports = router;