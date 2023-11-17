const { Router } = require("express");
const UserController = require("../controllers/UserController.js");

const routes = Router();
const usersRoutes = Router();

usersRoutes.get("/users-admin", UserController.getAll);
usersRoutes.post("/users-admin", UserController.create);

routes.use(usersRoutes);

module.exports = routes;
