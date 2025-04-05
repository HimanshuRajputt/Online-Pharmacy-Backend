const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  trackingId: { type: String, require: true },
  transactionId: { type: String, require: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  amount: Number,
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
