const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    console.log("check token ran");
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userData = decoded
        next()
    } catch (err) {
        return res.status(401).json({
            message: 'Login failed!!',
            error: err
        })
    }
}

module.exports = {checkToken};