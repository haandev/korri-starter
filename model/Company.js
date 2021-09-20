const { sequelize, DataTypes } = require("./../init-connection");

const Company = sequelize.define("company", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  company: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contact: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  logo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  css: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  facebook: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  twitter: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  instagram: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  youtube: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  garson: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  vale: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sikayet: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Company;
