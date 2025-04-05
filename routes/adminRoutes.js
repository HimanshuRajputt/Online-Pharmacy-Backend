// adminRoutes.js

const express = require("express");
const adminRoutes = express.Router();
// const adminAuth = require("../middleware/adminAuth");
const User = require("../models/User");
// const Order = require("../models/Order");
const adminAuth = require("../middlewares/adminAuthMiddleware");
const Order = require("../models/Order");

// Get all users
adminRoutes.get("/users", adminAuth, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// Get all orders
adminRoutes.get("/orders", adminAuth, async (req, res) => {
  try {
    const orders = await Order.find({}).populate("userId", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// Get orders of a specific user
adminRoutes.get("/orders/:userId", adminAuth, async (req, res) => {
    // console.log(req.params.userId)
  try {
    const orders = await Order.find({ user: req.params.userId });
    // console.log(`AdminRoute: ${orders}`)
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user orders" });
  }
});

// Update order status
adminRoutes.patch("/orders/:orderId/status", adminAuth, async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status" });
  }
});

module.exports = adminRoutes;
