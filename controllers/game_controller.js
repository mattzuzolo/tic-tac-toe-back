const { Game } = require("../models/game");

module.exports = {
  index(request, response, next){
    Game.find({})
      .then(games => response.send({ games }))
      .catch(next);
  },
}