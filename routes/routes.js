const UserController = require("../controllers/user_controller");
const GameController = require("../controllers/game_controller");


module.exports = (app) => {
  //User endpoints
  app.get("/users", UserController.index);
  app.post("/users", UserController.create);

  //Game endpoints
}