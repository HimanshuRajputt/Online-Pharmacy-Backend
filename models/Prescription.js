const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fileUrl: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Prescription", PrescriptionSchema);
