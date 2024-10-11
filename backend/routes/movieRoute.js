const router = require("express").Router();
const Movie = require("../models/movieModal");

router.post("/add-movie", async (req, res) => {
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

router.get("/list", async (req, res) => {
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

router.post("/update-movie", async (req, res) => {
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

module.exports = router;
