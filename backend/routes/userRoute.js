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

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if(!user) {
        return res.send({
            success: false,
            message: "User does not exist"
        })
    }
    const isPassWordValid = user.password === req.body.password
    if(!isPassWordValid) {
        return res.send({
            success: false,
            message: "Password is invalid"
        })
    }
    res.status(200).json({ success: true, message: "Logged in"})
})


module.exports = router;
