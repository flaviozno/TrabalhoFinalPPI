const { User } = require("../models/index.js");
const Exception = require("../exceptions/Exception.js");
const NotFoundException = require("../exceptions/NotFoundException.js");
const ErrorCode = require("../exceptions/ErrorCode.js");
const StringUtils = require("../utils/StringUtils.js");
const ServiceFailedException = require("../exceptions/ServiceFailedException.js");
class UserService {
  constructor() {
    this.SERVICE_NAME = "USER";
    this.OBJECT_NAME = "Usuário";
    this.MODEL_COLUMNS_NAMES = [
      "id",
      "isAdmin",
      "name",
      "type",
      "email",
      "phone",
      "password",
      "passwordHash",
      "passwordResetExpiresIn",
      "passwordResetToken",
      "profilePhotoLink",
    ];
  }
  async findByEmail(email) {
    try {
      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        throw new NotFoundException(this.SERVICE_NAME, this.OBJECT_NAME);
      }

      return user;
    } catch (error) {
      if (error instanceof Exception) throw error;
      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }
  async create(newUser) {
    try {
      await this.getByEmail(newUser.email)
        .then(() => {
          throw new Exception(ErrorCode.USER.EMAIL_ALREADY_IN_USE);
        })
        .catch((error) => {
          if (!(error instanceof NotFoundException)) {
            throw error;
          }
        });

      const user = await User.create({
        isAdmin: newUser.isAdmin,
        email: newUser.email,
        name: StringUtils.formatName(newUser.name),
        password: newUser.password,
        profilePhotoLink: newUser.profilePhotoLink,
      });

      return user;
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }

  async deleteUserById(userId) {
    try {
      const user = await this.getById(userId);

      await user.destroy();
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new NotFoundException(this.SERVICE_NAME, this.OBJECT_NAME);
      }

      return user;
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }

  async getAll() {
    try {
      const users = await User.findAll();

      if (!users) {
        throw new NotFoundException(this.SERVICE_NAME, error);
      }

      return { users: users };
    } catch (error) {
      if (error instanceof Exception) throw error;

      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        throw new NotFoundException(this.SERVICE_NAME, this.OBJECT_NAME);
      }

      return user;
    } catch (error) {
      if (error instanceof Exception) throw error;
      throw new ServiceFailedException(this.SERVICE_NAME, error);
    }
  }
}
module.exports = new UserService();
