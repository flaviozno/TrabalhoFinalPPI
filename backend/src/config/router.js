const express = require("express");
const Router = express.Router;
const userRoutes = require("../routes/userRoutes.js");
const authRoutes = require("../routes/authRoutes.js");
const productsRoutes = require("../routes/productsRoutes.js");

const routes = Router();

const unProtectedRouter = Router();

unProtectedRouter.use("", authRoutes);
unProtectedRouter.use("", productsRoutes);
unProtectedRouter.use("", userRoutes);


routes.use("/api", unProtectedRouter);

module.exports = routes;
