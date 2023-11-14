const express = require("express");
const Router = express.Router;
const userRoutes = require("../routes/userRoutes.js");
const authRoutes = require("../routes/authRoutes.js");
const productsRoutes = require("../routes/productsRoutes.js");
const authChecker = require("../middleware/auth.js");

const routes = Router();

const unProtectedRouter = Router();
const ProtectedRouter = Router();

unProtectedRouter.use("", authRoutes);
unProtectedRouter.use("", productsRoutes);
ProtectedRouter.use("", userRoutes)

routes.use("/api", unProtectedRouter);
routes.use("/api", authChecker, ProtectedRouter)

module.exports = routes;
