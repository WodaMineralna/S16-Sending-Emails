const newError = require("../utils/newError");

const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// ^ pagination is currently unnecessary, app won't be handling thousands of products at once (because there aren't so many)
// ! pagination will be implemented during course section S21 - Adding Pagination
productSchema.statics.fetchAll = async function (filter) {
  try {
    const products = await this.find(filter ? { userId: filter } : {});
    return products;
  } catch (error) {
    throw newError("Failed to fetch products", error);
  }
};

productSchema.statics.editProductById = async function (
  id,
  title,
  price,
  description,
  imageUrl
) {
  try {
    const updatedProduct = await this.findByIdAndUpdate(
      id,
      { title, price, description, imageUrl },
      { new: true, runValidations: true }
    );

    console.log("Updated product data:", updatedProduct); // DEBUGGING
    return updatedProduct;
  } catch (error) {
    throw newError(`Failed update product with ID: ${id}`, error);
  }
};

productSchema.statics.findProductById = async function (id) {
  try {
    const product = await this.findById(id);
    return product;
  } catch (error) {
    throw newError(`Failed to fetch product with ID: ${id}`, error);
  }
};

productSchema.statics.deleteProduct = async function (id) {
  try {
    await this.findByIdAndDelete(id);
  } catch (error) {
    throw newError(`Failed to delete product with ID: ${id}`, error);
  }
};

module.exports = mongoose.model("Product", productSchema);
