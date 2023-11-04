const Sequelize = require("sequelize");
const cls = require("cls-hooked");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const config = require("../config/database.js");
const db = {};
const namespace = cls.createNamespace("ndm");

Sequelize.useCLS(namespace);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    console.log(file)
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.transaction = (task) => {
  return namespace.get("transaction") ? task() : sequelize.transaction(task);
};

sequelize.sync();

module.exports = db;
