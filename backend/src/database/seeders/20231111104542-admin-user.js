"use strict";

const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = [
      {
        id: v4(),
        name: "admin",
        email: "admin@admin.com",
        isAdmin: true,
        passwordHash: await bcrypt.hash("admin", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Users", user);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", { email: "admin@admin.com" }, {});
  },
};
