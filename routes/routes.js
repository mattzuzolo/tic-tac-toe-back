const UserController = require("../controllers/user_controller");
const GameController = require("../controllers/game_controller");


module.exports = (app) => {
  //User endpoints
  app.get("/api/v1/users", UserController.index);
  app.post("/api/v1/users", UserController.create);

  //Game endpoints
}