const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  body: String,
  title: String,
});

module.exports = mongoose.model("Blog", blogSchema);
