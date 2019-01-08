const { User } = require("../models/user");
const { ObjectID } = require("mongodb");

module.exports = {
  index(request, response, next){
    User.find({})
      .then(users => response.send({ users }))
      .catch(next);
  },
  create(request, response, next){
    let body = { username } = request.body;
    let user = new User(body);
    user.save()
      .then(user => response.send(user))
      .catch(event => response.status(400).send(event));
  },
}