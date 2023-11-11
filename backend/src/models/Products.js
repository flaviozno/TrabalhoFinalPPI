module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stars: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true,
      validate: {
        isDecimal: true,
        min: 0,
        max: 5,
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
  return Products;
};
