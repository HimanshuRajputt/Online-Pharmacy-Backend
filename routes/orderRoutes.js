const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
// const {
//   placeOrder,
//   getOrders,
//   updateOrderStatus,
// } = require("../controllers/orderController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { placeOrder, getOrders, updateOrderStatus } = require("../controllers/orderController");

const orderRoutes = express.Router();

orderRoutes.post("/place", authMiddleware, placeOrder);
orderRoutes.get("/", authMiddleware, getOrders);
orderRoutes.put(
  "/:orderId",
  authMiddleware,
  roleMiddleware(["admin"]),
  updateOrderStatus
);

module.exports = orderRoutes;
