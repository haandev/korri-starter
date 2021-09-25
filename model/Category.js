const { sequelize, DataTypes } = require("./../init-connection");

const Company = require("./Company");
const CategoryLocale = require("./CategoryLocale");

const Category = sequelize.define("category", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  o: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Category.belongsTo(Company);
Category.hasMany(CategoryLocale);

module.exports = Category;
