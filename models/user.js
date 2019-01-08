const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { 
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    unique: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };