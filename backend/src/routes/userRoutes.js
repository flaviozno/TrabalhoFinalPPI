const { Router } = require("express");
const UserController = require("../controllers/UserController.js");

const routes = Router();
const usersRoutes = Router();

usersRoutes.post("/users", UserController.create);

routes.use(usersRoutes);

module.exports = routes;
