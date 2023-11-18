const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController.js");

const routes = Router();
const productsRoutes = Router();
    
productsRoutes.get("/products", ProductsController.getAll);
productsRoutes.delete("/products/:id", ProductsController.deleteById);
productsRoutes.post("/products", ProductsController.create);
productsRoutes.patch("/products/:id", ProductsController.update);

routes.use(productsRoutes);

module.exports = routes;
