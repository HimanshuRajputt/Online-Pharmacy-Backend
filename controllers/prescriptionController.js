const Prescription = require("../models/Prescription");

exports.uploadPrescription = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const newPrescription = new Prescription({
      user: req.user.id,
      fileUrl: `/uploads/${req.file.filename}`,
    });

    await newPrescription.save();
    res
      .status(201)
      .json({
        message: "Prescription uploaded",
        fileUrl: newPrescription.fileUrl,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ user: req.user.id });
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
