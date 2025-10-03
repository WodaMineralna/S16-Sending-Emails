const Product = require("../models/product");

exports.getProductsPage = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/product-list", {
    products,
    pageTitle: "All Products",
    path: "/products",
  });
};

exports.getProduct = async (req, res, next) => {
  const id = req.params.id;
  const filteredProduct = await Product.findProductById(id);

  res.render("shop/product-detail", {
    product: filteredProduct,
    pageTitle: `${filteredProduct.title} Details`,
    path: "/products",
  });
};

exports.getIndex = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render("shop/index", {
    products,
    pageTitle: "Shop",
    path: "/",
  });
};

exports.getCart = async (req, res, next) => {
  const cartItems = await req.user.getCart();

  res.render("shop/cart", {
    products: cartItems,
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.postCart = async (req, res, next) => {
  const id = req.body.productId;
  const product = await Product.findProductById(id);
  await req.user.addToCart(product);

  res.redirect("/cart");
};

exports.postDeleteCart = async (req, res, next) => {
  const id = req.body.productId;

  await req.user.deleteItemFromCart(id);
  res.redirect("/cart");
};

exports.getOrders = async (req, res, next) => {
  const orders = await req.user.getOrders();
  res.render("shop/orders", {
    orders,
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.postOrder = async (req, res, next) => {
  await req.user.addOrder();

  res.redirect("/orders");
};
