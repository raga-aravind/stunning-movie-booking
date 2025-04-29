// backend/models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  showtimes: [String], // Store showtimes for the movie
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
