const { sequelize, DataTypes } = require("./../init-connection");

const Category = require("./Category");
const ProductLocale = require("./ProductLocale");

const Product = sequelize.define("product", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

Product.belongsTo(Category);
Product.hasMany(ProductLocale);

module.exports = Product;
