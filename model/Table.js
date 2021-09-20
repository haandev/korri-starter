const { sequelize, DataTypes } = require("./../init-connection");

const Company = require("./Company");

const Table = sequelize.define("table", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  qrcode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  table_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Table.belongsTo(Company);

module.exports = Table;
