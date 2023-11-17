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
  async create(req, res){
    try {
      const response = await ProductsService.create(req.body);

      return res.json(response)
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
  async deleteById(req, res) {
    try {
      const response = await ProductsService.deleteById(req.params.id);
      if (response.status == 200) return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.status || 500)
        .send({ ...error, message: error.message });
    }
  }
}

module.exports = new ProductsController();
