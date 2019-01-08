const { User } = require("../models/user");
const { ObjectID } = require("mongodb");

module.exports = {
  index(request, response, next){
    User.find({})
      .then(users => response.send({ users }))
      .catch(next);
  },
  create(request, response, next){
    console.log("CREATE REQUEST:", request);
    console.log("CREATE REQUEST BODY: ", request.body);
  },
}