const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config({ path: './.env.local' });
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

// POST body={
//   username, 
//   password,  
// }

const UserSignup = async (req, role, res) => {
  const { username, password } = req;
  try {
    const user = await User.findOne({ username });
    if (user) {
      res.json({ message: "user already exists" });
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
        username,
        password: hashedPassword,
        role
      });
      await newUser.save();
      return res.status(200).json({ success: true });
    }
  }
  catch (err) {
    console.error(err);
  }
};


// POST body={
//   username, 
//   password,  
// }
const UserLogin = async (req, role, res) => {
  const { username, password } = req;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Invalid login credentials.",
        success: false,
      })
    }
    else {
      if (user.role !== role) {
        return res.status(403).json({
          message: "Please make sure you are logging in from the right portal.",
          success: false,
        });
      }
      let isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign(
          {
            role: user.role,
            username: user.username,
          },
          secret,
        );

        console.log(token);

        let result = {
          name: user.username,
          role: user.role,
          token: `Bearer ${token}`,
          expiresIn: 168,
        };

        return res.status(200).json({
          ...result,
          message: "You are now logged in.",
        });
      }
      else {
        return res.status(403).json({
          message: "Incorrect password.",
        });
      }
    }
  }
  catch (err) {
    console.error(err);
  }
};


module.exports = {
  UserSignup,
  UserLogin
}