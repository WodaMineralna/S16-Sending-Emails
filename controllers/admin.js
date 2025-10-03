const Product = require("../models/product");

exports.getProductsPage = async (req, res, next) => {
  const products = await Product.fetchAll(req.user._id);
  res.render("admin/products", {
    products,
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
};

exports.getEditProduct = async (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");

  const id = req.params.productId;
  const product = await Product.findProductById(id);

  res.render("admin/edit-product", {
    product,
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    editing: editMode,
  });
};

exports.postEditProduct = async (req, res, next) => {
  const id = req.body.productId;
  const { title, price, description, imageUrl } = req.body;
  const product = await Product.editProductById(
    id,
    title,
    price,
    description,
    imageUrl
  );

  console.log("controllers/admin.js | Edited productId: ", id); // DEBUGGING
  await product.save();
  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = async (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product({
    title,
    price,
    description,
    imageUrl,
    userId: req.user._id,
  });
  console.log("Added product data:", product); // DEBUGGING
  await product.save();
  res.redirect(`/products`);
};

exports.postDeleteProduct = async (req, res, next) => {
  const id = req.body.productId;
  await Product.deleteProduct(id);
  res.redirect("/admin/products");
};
