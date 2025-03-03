const mongoose = require("mongoose");

const Restaurant = new mongoose.Schema({

  name: { type: String, required: true },
  location: { type: String },
  cuisine: { type: Number, required: true }
});

module.exports = mongoose.model("Restuarant", restuarantSchema);