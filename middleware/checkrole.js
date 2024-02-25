const User = require("../models/User");
const checkRole = (roles) => async (req, res, next) => {
    try {
        const { username } = req.userData;
        // Retrieve user info from DB
        const user = await User.findOne({ username });
        if (!roles.includes(user.role)) {
            return res.status(401).json("Sorry, you do not have access to this route");
        }
        // User has the required role, proceed to the next middleware
        next();
    } catch (error) {
        return res.status(401).json("Invalid token or unauthorized access");
    }
};

module.exports = { checkRole };