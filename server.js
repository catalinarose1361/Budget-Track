const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://willcat1361:password1361@ds029811.mlab.com:29811/heroku_sqwdf5pp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
app.use(require("./Develop/routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});