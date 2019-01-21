const { Game } = require("../models/game");

module.exports = {
  index(request, response, next){
    Game.find({})
      .then(games => response.send({ games }))
      .catch(next);
  },
  create(request, response, next){
    let body = { turnsPlayed, userWon, user } = request.body;
    let game = new Game(body);
    game.save()
      .then(game => response.send(game))
      .catch(event => response.status(400).send(event));
  }
}
