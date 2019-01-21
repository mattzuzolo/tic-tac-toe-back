const UserController = require("../controllers/user_controller");
const GameController = require("../controllers/game_controller");


module.exports = (app) => {
  //User endpoints
  app.get("/api/v1/users", UserController.index);
  app.get("/api/v1/users/:id", UserController.findIndividualById);
  app.post("/api/v1/users", UserController.create);
  app.post("/api/v1/users/login", UserController.login);

  //Game endpoints
  app.get("/api/v1/games", GameController.index);
  // app.post("/api/v1/games", GameContoller.create);
}