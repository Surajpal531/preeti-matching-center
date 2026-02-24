const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    measurements: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);