const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(tokenHeader, process.env.JWT_KEY);
        res.userData = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({
            error: "error 401 Auth fail"
        })
    }
}