const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const productRoutes = require('./api/routes/products');

const userRoutes = require('./api/routes/user');
//MongoDB Connection
mongoose.connect('mongodb+srv://Frost:' + process.env.MONGO_ATLAS_PW + '@intershipcluster-9whtg.mongodb.net/test?retryWrites=true&w=majority'
    , {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
//Morgan dev details in console
app.use(morgan('dev'));

//body parser have body property which helps in simplify the requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//CORS Config
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Controll-Allow-Methods', 'GET,PUT,DELETE,PATCH,POST');
        return res.status(200).json({})
    }
    next();
});

//Routing
app.use('/products', productRoutes);

app.use('/user', userRoutes);

//Error handling
app.use((req, res, next) => {
    const err = new Error("Route Not Found Error");
    err.status = 404;
    next(err);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;