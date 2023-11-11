const { Router } = require("express");
const SessionController = require("../controllers/SessionController");

const routes = Router();
const userRoutes = Router();

userRoutes.post("/auth", SessionController.auth);

routes.use(userRoutes);

module.exports = routes;
