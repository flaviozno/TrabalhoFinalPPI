const Exception = require("../exceptions/Exception.js");
const ErrorCode = require("../exceptions/ErrorCode.js");
const ServiceFailedException = require("../exceptions/ServiceFailedException.js");
const NotFoundException = require("../exceptions/NotFoundException.js");
const UserService = require("./UserService.js");

class SessionService {
  constructor() {
    this.SERVICE_NAME = "SESSION";
    this.OBJECT_NAME = "Usuário";
  }

  async auth(auth) {
    try {
      const { email, password } = auth;

      const user = await UserService.getByEmail(email);

      if (!(await user.checkPassword(password))) {
        throw new Exception(ErrorCode.INVALID_AUTHENTICATION);
      }

      return await this.generateSessionToken(user.id);
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }

  async generateSessionToken(userId) {
    try {
      const user = await UserService.getById(userId);
      return {
        user: user.toJSON(),
        token: user.generateToken(),
      };
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }
}

module.exports = new SessionService();
