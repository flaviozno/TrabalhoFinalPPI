const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { addDays } = require("../utils/index.js");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      isAdmin: DataTypes.BOOLEAN,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      passwordHash: DataTypes.STRING,
      passwordResetExpiresIn: DataTypes.DATE,
      passwordResetToken: DataTypes.STRING,
      profilePhotoLink: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            console.log(user.password);
            user.passwordHash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
  };

  User.prototype.generateToken = function () {
    return jwt.sign(
      {
        id: this.id,
        roles: this.roles,
        customerId: this.customerId,
        type: this.type,
        expiresToken: addDays(7),
      },
      "405fe60a5db14040114c0983e14cd5e2" // MD5 Hash de PPI
    );
  };
  return User;
};
