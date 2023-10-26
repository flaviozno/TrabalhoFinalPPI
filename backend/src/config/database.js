import env from "./dotenv.js";

const db = {
  host: env.parsed.host || "localhost",
  username: env.parsed.username || "root",
  password: env.parsed.password || "root",
  schema: env.parsed.schema || "ppi",
  dialect: env.parsed.dialect || "mysql",
  database: env.parsed.database || "ppi",
  define: {
    timestamps: true,
    underscored: true,
  },
};
export default db;
