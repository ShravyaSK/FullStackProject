const express = require("express");
var cors = require("cors");
const userRoute = require("./routes/userRoute");
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.listen(8080, () => {
  console.log("Server has started!");
});
