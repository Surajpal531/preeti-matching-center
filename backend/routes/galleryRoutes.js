const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery");
const upload = require("../middleware/upload");
const auth = require("../middleware/authMiddleware");

/* GET ALL GALLERY IMAGES */
router.get("/", async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json(images);
});

/* ADD IMAGE (Admin Only) */
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const newImage = new Gallery({
      image: `/uploads/${req.file.filename}`,
      source: "local",
    });

    await newImage.save();
    res.json(newImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;