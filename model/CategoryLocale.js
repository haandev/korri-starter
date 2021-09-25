const { sequelize, DataTypes } = require("./../init-connection");

const CategoryLocale = sequelize.define("categoryLocale", {
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
  locale: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = CategoryLocale;
