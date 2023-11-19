const env = require("./dotenv.js");

const db = {
  host: process.env.host || "localhost",
  username: process.env.username || "root",
  password: process.env.password || "",
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
