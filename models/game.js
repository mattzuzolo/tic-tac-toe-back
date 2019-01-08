const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = require("./user");

const GameSchema = new Schema({
  turnsPlayed: Number,
  userWon: Boolean,
  user: [{
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  }],
});

const Game = mongoose.model("game", GameSchema);

module.exports = { Game };