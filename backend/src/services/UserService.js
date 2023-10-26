import User from "../models/User.js";
import Exception from "../exceptions/Exception.js";
import NotFoundException from "../exceptions/NotFoundException.js";
import ErrorCode from "../exceptions/ErrorCode.js";
import StringUtils from "../utils/StringUtils.js";

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
        type: newUser.type,
        password: newUser.password,
        phone: newUser.phone,
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

  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: { email: { [Op.iLike]: email } },
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

export default new UserService();