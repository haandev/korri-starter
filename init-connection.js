const { Sequelize, DataTypes } = require("sequelize");

const dbConfig = {
  dialect: process.env.DB_DRIVER,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
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
