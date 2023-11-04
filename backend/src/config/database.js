const env = require("./dotenv.js");

const db = {
  host: env.parsed.host || "localhost",
  username: env.parsed.username || "root",
  password: env.parsed.password || "",
  schema: env.parsed.schema || "ppi",
  dialect: env.parsed.dialect || "mysql",
  database: env.parsed.database || "ppi",
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = db;
