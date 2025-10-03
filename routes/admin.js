const express = require("express");
const router = express.Router();

const isAuthed = require("../middleware/isAuthed");
const adminController = require("../controllers/admin");
const catchErrAsync = require("../utils/catchErrAsync");

// /admin/products => GET
router.get(
  "/products",
  isAuthed,
  catchErrAsync(adminController.getProductsPage)
);

// /admin/add-product => GET
router.get(
  "/add-product",
  isAuthed,
  catchErrAsync(adminController.getAddProduct)
);

// /admin/add-product => POST
router.post(
  "/add-product",
  isAuthed,
  catchErrAsync(adminController.postAddProduct)
);

router.get(
  "/edit-product/:productId",
  isAuthed,
  catchErrAsync(adminController.getEditProduct)
);

router.post(
  "/edit-product",
  isAuthed,
  catchErrAsync(adminController.postEditProduct)
);

router.post(
  "/delete/:productId",
  isAuthed,
  catchErrAsync(adminController.postDeleteProduct)
);

module.exports = router;
