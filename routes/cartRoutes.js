const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { addToCart, getCart, removeFromCart, updateCartItem } = require("../controllers/cartController");
// const {
//   addToCart,
//   removeFromCart,
//   getCart,
//   updateCartItem,
// } = require("../controllers/cartController");

const cartRoutes = express.Router();

cartRoutes.post("/add", authMiddleware, addToCart);
cartRoutes.get("/all", getCart);
// cartRoutes.get("/all", authMiddleware, getCart);
cartRoutes.delete("/:productId", authMiddleware, removeFromCart);
cartRoutes.put("/:productId", authMiddleware, updateCartItem);

module.exports = cartRoutes;
