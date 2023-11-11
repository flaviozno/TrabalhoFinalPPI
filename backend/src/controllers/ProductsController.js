const ProductsService = require("../services/ProductsService");

class ProductsController {
  async getAll(req, res) {
    try {
      const response = await ProductsService.getAll();

      return res.json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
}

module.exports = new ProductsController();
