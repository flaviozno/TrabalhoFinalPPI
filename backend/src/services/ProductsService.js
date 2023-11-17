const { Products } = require("../models/index.js");
const Exception = require("../exceptions/Exception.js");
const ErrorCode = require("../exceptions/ErrorCode.js");
const ServiceFailedException = require("../exceptions/ServiceFailedException.js");
const NotFoundException = require("../exceptions/NotFoundException.js");

class ProductsService {
  constructor() {
    this.SERVICE_NAME = "PRODUTOS";
    this.OBJECT_NAME = "Produtos";
  }

  async getAll() {
    try {
      const products = await Products.findAll();

      if (!products) {
        throw new NotFoundException(this.SERVICE_NAME, error);
      }
      return { products: products };
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }
  async create(data){
    try {
      const response = await Products.create({
        name: data.productName,
        description: data.productDescription,
        price: data.productPrice,
        imgURL: data.productImageUrl,
        amount: data.productQuantity
      });
      return response;
     
    } catch (error) {
      
    }
  }
  async deleteById(id) {
    try {
      const product = await Products.findByPk(id);

      if (!product) {
        throw new NotFoundException(
          this.SERVICE_NAME,
          `${this.OBJECT_NAME} not found with ID ${id}`
        );
      }

      await product.destroy();

      return {
        status: 200,
        message: `${this.OBJECT_NAME} with ID ${id} deleted successfully`,
      };
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }
}

module.exports = new ProductsService();
