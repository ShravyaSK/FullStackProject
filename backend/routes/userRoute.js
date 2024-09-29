const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const requestBody = req.body;
    const newUser = new User(requestBody);
    await newUser.save();
    res.status(200).json({ success: true, message: "User has been created" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
