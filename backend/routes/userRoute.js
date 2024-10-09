const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const requestBody = req.body;
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.send({
        success: false,
        message: "Email is already taken!",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(requestBody);
    await newUser.save();
    res.status(200).json({ success: true, message: "User has been created" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send({
      success: false,
      message: "User does not exist",
    });
  }

  const isPassWordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPassWordValid) {
    return res.send({
      success: false,
      message: "Password is invalid",
    });
  }
  const token = jwt.sign(
    { userId: user._id, randomKey: "randomVAlue" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({ success: true, message: "Logged in", data: token });
});

router.get("/get-current-user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User is fetched",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
