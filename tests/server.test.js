const mongoose = require("mongoose");
const User = require('./../models/user.js');
// const User = mongoose.model("user");

before(done => {
  mongoose.connect("mongodb://localhost:27017/tictactoe_test");

  mongoose.connection
    .once("open", () => mongoose.connection.collections)
    .then(() => User.remove({}))
    .then(() => {
      User.create({
        username: "test_username",
      })
    })
    .then(() => done())
    .then(() => done());
})
