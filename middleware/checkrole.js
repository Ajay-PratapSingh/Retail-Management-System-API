const User = require("../models/User");

const checkRole = (roles) => async (req, res, next) => {
    console.log("check role ran");
    let { username } = req.body;

    //retrieve user info from DB
    const user = await User.findOne({ username });
    !roles.includes(user.role)
        ? res.status(401).json("Sorry you do not have access to this route")
        : next();
};

module.exports={checkRole};
