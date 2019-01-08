const { User } = require("../models/user");

module.exports = {
  index(request, response, next){
    User.find({})
      .then(users => response.send({ users }))
      .catch(next);
  },
  findIndividualById(request, response, next){
    let id = request.params.id;
    User.findById(id)
      .then(user => {
        if(!user){
          return response.status(404).send();
        }
        response.send({user});
      })
      .catch(next);
  },
  create(request, response, next){
    let body = { username } = request.body;
    let user = new User(body);
    user.save()
      .then(user => response.send(user))
      .catch(event => response.status(400).send(event));
  },
  login(request, response, next){
    let body = { username } = request.body;
    User.findByCredentials(body)
      .then(user => {
        if(!user){
          return response.status(404).send();
        }
        response.send({user});
      })
      .catch(next);
  }
}