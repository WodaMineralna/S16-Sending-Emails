const express = require("express");
const router = express.Router();

const isAuthed = require("../middleware/isAuthed");
const shopController = require("../controllers/shop");
const catchErrAsync = require("../utils/catchErrAsync");

router.get("/", catchErrAsync(shopController.getIndex));

router.get("/products", catchErrAsync(shopController.getProductsPage));

router.get("/products/:id", catchErrAsync(shopController.getProduct));

router.get("/cart", isAuthed, catchErrAsync(shopController.getCart));

router.post("/cart", isAuthed, catchErrAsync(shopController.postCart));

router.post(
  "/cart/delete/:productId",
  isAuthed,
  catchErrAsync(shopController.postDeleteCart)
);

router.get("/orders", isAuthed, catchErrAsync(shopController.getOrders));

router.post(
  "/orders/create",
  isAuthed,
  catchErrAsync(shopController.postOrder)
);

module.exports = router;
