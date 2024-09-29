const express = require("express")
const userRoute = require("./routes/userRoute")
const dbConfig = require("./config/dbConfig")

const app = express()
app.use(express.json())

app.use("/api/users", userRoute)

app.listen(8080, () => {
    console.log("Server has started!")
})