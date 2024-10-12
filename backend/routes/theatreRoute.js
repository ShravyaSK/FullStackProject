const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const Movie = require("../models/movieModel");
const Theatre = require("../models/theatreModal");

router.post("/add-theatre", async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();

    res.status(200).send({
      success: true,
      message: "Theatre is added!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "There was some error in adding theatre!",
    });
  }
});

router.post("/update-theatre", authMiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);

    res.send({
      success: true,
      message: "Theatre updated with latest info!",
    });
  } catch (error) {
    res.send({
      success: false,
      error: "Something went wrong!",
    });
  }
});

router.post("/delete-theatre", authMiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted!",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Some issue!",
    });
  }
});

router.get("/get-all-theatres-by-user-id", authMiddleware, async (req, res) => {
  try {
    const theatres = await Theatre.find({ owner: req.body.userId });

    res.status(200).send({
      success: true,
      message: "Theatres fetched",
      theatres,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some issue in fetching theatres for user.",
    });
  }
});

router.get("/get-all-theatres", async (req, res) => {
  try {
    const theatres = await Theatre.find()
      .populate("owner", "name email")

    res.status(200).send({
      success: true,
      message: "Theatres fetched",
      theatres,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "There was some issue in fetching theatres for user.",
    });
  }
});

module.exports = router;
