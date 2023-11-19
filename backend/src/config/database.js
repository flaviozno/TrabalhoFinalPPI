const env = require("./dotenv.js");

const db = {
  host: process.env.url || "localhost",
  username: process.env.usernameDB || "root",
  password: process.env.passwordDB || "",
  dialect: process.env.dialect || "mysql",
  database: process.env.database || "ppi",
  logging: false,
  pool: {
    max: 4,
    min: 1,
    acquire: 25000,
    idle: 50000,
  },
  define: {
    timestamps: true,
    underscored: false,
    underscoredAll: false,
  },
};

module.exports = db;
