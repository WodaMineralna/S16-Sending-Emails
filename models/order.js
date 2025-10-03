const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    email: {
      type: String,
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  products: [
    {
      productData: {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
