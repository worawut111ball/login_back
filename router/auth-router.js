const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authController = require("../controllers/auth-controllers");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/venues", authenticate, authController.getme);

module.exports = router;
