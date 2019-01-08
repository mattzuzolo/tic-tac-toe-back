const mongoose = require("mongoose");

//configure mongoose to use native JS promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/tictactoe")
  .then(console.log("Mongoose is connected..."))
  .catch(console.error("Mongoose failed to conenct..."));

module.exports = { mongoose };