const env = require("./dotenv.js");

const db = {
  host: env.parsed.host || "localhost",
  username: env.parsed.username || "root",
  password: env.parsed.password || "",
  dialect: env.parsed.dialect || "mysql",
  database: env.parsed.database || "ppi",
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
