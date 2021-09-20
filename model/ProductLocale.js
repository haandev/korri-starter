const { sequelize, DataTypes } = require("./../init-connection");

const ProductLocale = sequelize.define("productLocale", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  locale: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = ProductLocale;
