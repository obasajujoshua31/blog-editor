const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

dotenv.config();

const app = express();

// Initialize Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// Connect to Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch(error => {
    console.error("Error occured", error);
  });

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to blog Home",
  });
});

app.use("/api", routes);
const port = process.env.PORT || 5400;

app.listen(port, () => {
  console.log("Server started at port", port);
});
