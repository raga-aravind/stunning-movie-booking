// backend/routes/movieRoutes.js
const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new movie (admin only)
router.post("/", async (req, res) => {
  const { title, description, image, showtimes } = req.body;
  const newMovie = new Movie({ title, description, image, showtimes });
  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Edit a movie (admin only)
router.put("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a movie (admin only)
router.delete("/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
