const { Router } = require('express');
const { UserLogin, UserSignup } = require('../controllers/auth');
const router = Router();

router.post("/signup-admin", async (req, res) => {
    await UserSignup(req.body, "admin", res);
});
router.post("/signup-employee", async (req, res) => {
    await UserSignup(req.body, "employee", res);
});
router.post("/login-admin", async (req, res) => {
    await UserLogin(req.body, "admin", res);
});
router.post("/login-employee", async (req, res) => {
    await UserLogin(req.body, "employee", res);
});

module.exports = router;