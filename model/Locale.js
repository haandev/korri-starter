const { sequelize, DataTypes } = require("./../init-connection");

const Company = require("./Company");

const Locale = sequelize.define("locale", {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING(3),
        allowNull: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    default: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
});

Locale.belongsTo(Company);

module.exports = Locale;
