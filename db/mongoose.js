const mongoose = require("mongoose");

//configure mongoose to use native JS promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/tictactoe",  { useNewUrlParser: true })
  .then(console.log("Mongoose is connected to the database..."))
  .catch(error => console.error("Something went with mongoose: ", error))

module.exports = { mongoose };