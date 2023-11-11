const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController.js");

const routes = Router();
const productsRoutes = Router();

productsRoutes.get("/products", ProductsController.getAll);

routes.use(productsRoutes);

module.exports = routes;
