const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const auth = require("../middleware/authMiddleware");

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name,
      price,
      image: req.file
        ? `/uploads/${req.file.filename}`
        : null,
    });

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;