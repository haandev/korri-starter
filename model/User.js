const { sequelize, DataTypes } = require("./../init-connection");

const Company = require("./Company");

const User = sequelize.define("user", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
});

User.belongsTo(Company);

module.exports = User;
