const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  description: String,
  price: Number,
  stock: Number,
  discount: Number,
  prescriptionRequired: Boolean,
  ratings: Number,
  imageUrl: String,
});

module.exports = mongoose.model("Product", ProductSchema);
