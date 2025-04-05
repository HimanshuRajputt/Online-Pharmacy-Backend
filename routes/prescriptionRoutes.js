const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const { uploadPrescription, getUserPrescriptions } = require("../controllers/prescriptionController");
// const {
//   uploadPrescription,
//   getUserPrescriptions,
// } = require("../controllers/prescriptionController");

const prescriptionRoutes = express.Router();

prescriptionRoutes.post(
  "/upload",
  authMiddleware,
  upload.single("prescription"),
  uploadPrescription
);
prescriptionRoutes.get("/", authMiddleware, getUserPrescriptions);

module.exports = prescriptionRoutes;
