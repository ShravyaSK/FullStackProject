const router = require("express").Router()

router.post("/register", (req, res) => {
    console.log("this is called")
    res.status(200).json({message: "All is well"})
})

module.exports = router