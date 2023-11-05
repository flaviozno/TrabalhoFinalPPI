"use strict";

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable("Users", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    passwordHash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    passwordResetExpiresIn: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    passwordResetToken: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    profilePhotoLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
}

async function down(queryInterface, Sequelize) {
  return queryInterface.dropTable("Users");
}

module.exports = {
  up,
  down,
};
