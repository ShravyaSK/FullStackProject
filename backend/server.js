const express = require("express");
var cors = require("cors");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const bookingRoute = require("./routes/bookingRoute");

const app = express();

app.use(express.static("build"));

app.get("/profile", function (req, res) {
  res.redirect("/");
});

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/theatres", theatreRoute);
app.use("/api/shows", showRoute);
app.use("/api/booking", bookingRoute);

app.listen(8080, () => {
  console.log("Server has started!");
});
