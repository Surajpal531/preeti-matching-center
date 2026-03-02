const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  image: { type: String, required: true },
  source: { type: String, default: "local" }, // local | instagram | google
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Gallery", gallerySchema);