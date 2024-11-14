const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
});

module.exports = mongoose.model("Serie", serieSchema);
