const express = require("express");
const Router = express.Router;
const userRoutes = require("../routes/userRoutes.js");

const routes = Router();

const ProtectedRouter = Router();

ProtectedRouter.use("", userRoutes);
routes.use("/api", ProtectedRouter);

module.exports = routes;
