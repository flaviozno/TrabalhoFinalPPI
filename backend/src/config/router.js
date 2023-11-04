const express = require("express");
const Router = express.Router;
const userRoutes = require("../routes/userRoutes.js");
const authChecker = require("../middleware/authChecker.js");

const routes = Router();

const ProtectedRouter = Router();

ProtectedRouter.use("", userRoutes);
routes.use("/api", authChecker, ProtectedRouter);

module.exports = routes;
