const Order = require("../models/Order");
const Cart = require("../models/Cart");

// exports.placeOrder = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user.id }).populate(
//       "items.product"
//     );

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({ message: "Cart is empty" });
//     }

//     const totalAmount = cart.items.reduce(
//       (acc, item) => acc + item.quantity * item.product.price,
//       0
//     );

//     const newOrder = new Order({
//       user: req.user.id,
//       items: cart.items,
//       totalAmount,
//     });

//     await newOrder.save();
//     await Cart.findOneAndDelete({ user: req.user.id });

//     res.status(201).json(newOrder);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
exports.placeOrder = async (req, res) => {
  try {
    const { transactionId, trackingId } = req.body; // Get transaction details from frontend

    if (!transactionId || !trackingId) {
      return res
        .status(400)
        .json({ message: "Transaction details are required" });
    }

    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalAmount = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );

    const newOrder = new Order({
      user: req.user.id,
      items: cart.items,
      amount: totalAmount, // Use 'amount' instead of 'totalAmount' (schema expects 'amount')
      transactionId, // Save transaction ID
      trackingId, // Save tracking ID
    });

    await newOrder.save();
    await Cart.findOneAndDelete({ user: req.user.id });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate(
      "items.product"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = req.body.status;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
