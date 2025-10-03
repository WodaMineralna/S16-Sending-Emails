const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin");
const shopRoutes = require("./shop");
const authRoutes = require("./auth");

router.use("/admin", adminRoutes);
router.use(shopRoutes);
router.use(authRoutes);

module.exports = router;
