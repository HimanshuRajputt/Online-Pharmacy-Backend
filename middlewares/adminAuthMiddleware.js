// authMiddleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path as necessary

const adminAuth = async (req, res, next) => {
  try {
    // Extract token from headers
    const token = req.header("token");
    // console.log(`AdminAuth Token: ${token}`)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by decoded token
    const user = await User.findById(decoded.id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = adminAuth;
