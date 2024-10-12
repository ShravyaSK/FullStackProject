const express = require("express");
var cors = require("cors");
const userRoute = require("./routes/userRoute");
const moviesRouter = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/movies", moviesRouter);
app.use("/api/theatres", theatreRoute);
app.use("/api/shows", showRoute);

app.listen(8080, () => {
  console.log("Server has started!");
});
