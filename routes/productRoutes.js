const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { createProduct, getProducts } = require("../controllers/productController");
// const {
//   createProduct,
//   getProducts,
// } = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  createProduct
);
productRoutes.get("/", getProducts);

module.exports = productRoutes;
