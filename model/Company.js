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
    allowNull: true,
  },
  logo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  css: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  facebook: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  twitter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  instagram: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  youtube: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  garson: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  vale: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sikayet: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Company;
