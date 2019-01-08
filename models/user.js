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

UserSchema.statics.findByCredentials = function({username}){
  return this.findOne({username})
    .then(user => {
      if (!user){
        return Promise.reject();
      }
      console.log("FOUND USER:", user);
      return user;
    })
}

const User = mongoose.model("user", UserSchema);

module.exports = { User };