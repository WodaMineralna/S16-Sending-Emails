const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const catchErrAsync = require("../utils/catchErrAsync");

router.get("/login", authController.getLogin);

router.post("/login", catchErrAsync(authController.postLogin));

router.post("/logout", catchErrAsync(authController.postLogout));

router.get("/signup", authController.getSignup);

router.post("/signup", catchErrAsync(authController.postSignup));

module.exports = router;
