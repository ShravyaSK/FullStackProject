const router = require("express").Router();
const Movie = require("../models/movieModel");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/add-movie", authMiddleware, async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();

    res.status(200).send({
      success: true,
      message: "Movie is added!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some error in adding movie!",
    });
  }
});

router.get("/list", authMiddleware, async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).send({
      success: true,
      message: "Movies fetched",
      movies,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some issue in fetching movies.",
    });
  }
});

router.post("/update-movie", authMiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "Movie updated with latest info!",
    });
  } catch (error) {
    res.send({
      success: false,
      error: "Something went wrong!",
    });
  }
});

router.post("/delete-movie", authMiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    res.send({
      success: true,
      message: "Movie Deleted!",
    });
  } catch (error) {
    res.send({
      success: false,
      error: "Something went wrong!",
    });
  }
});

module.exports = router;
