const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/jokes/", UserController.findAllJokes);
  app.get("/api/jokes/:_id", UserController.findOneSingleJoke);
  app.post("/api/jokes/new", UserController.createNewJoke);
  app.put("/api/jokes/update/:_id", UserController.updateExistingJoke);
  app.delete("/api/jokes/delete/:_id", UserController.deleteAnExistingJoke);
};