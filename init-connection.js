const { Sequelize, DataTypes } = require("sequelize");

const dbConfig = {
  dialect: process.env.DB_DRIVER || "mysql",
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || "yunniq_test",
  password: process.env.DB_PASSWORD || "yunniq_test",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "yunniq_test",
};

const sequelize = new Sequelize({
  ...dbConfig,
  define: {
    underscored: true,
    timestamps: true,
  },
  logQueryParameters: false,
  logging: false,
});
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
async function sync() {
  try {
    await sequelize.sync({
      alter: process.env.NODE_ENV === "development",
      logging: false,
    });
    console.log(`Models synchronized successfully`);
  } catch (error) {
    console.error("Unable to sync:", error);
  }
}

module.exports = {
  sequelize,
  DataTypes: DataTypes,
  sync,
  connect,
};
