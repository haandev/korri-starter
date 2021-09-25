const { sequelize, DataTypes } = require("./../init-connection");

const User = require("./User");

const Login = sequelize.define("login", {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    refreshToken: {
        type: DataTypes.STRING(64),
        allowNull:true
    },
    expiredAt: {
        type: DataTypes.DATE,
        allowNull:true
    },
    userAgent:{
        type: DataTypes.TEXT,
        allowNull:true
    },
    firstIp:{
        type: DataTypes.STRING(25),
        allowNull:true
    }
},{paranoid:true})

Login.belongsTo(User)

module.exports=Login;