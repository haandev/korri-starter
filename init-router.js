const fs = require("fs");
const { toKebabCase } = require("./utils");

const RoutersLoader = (app) => {
  const Routers = {};
  fs.readdirSync("router/").forEach((fileName) => {
    Routers[toKebabCase(fileName.split(".")[0])] = require("./router/" +
      fileName);
    app.use(
      `/api/${toKebabCase(fileName.split(".")[0])}`,
      Routers[toKebabCase(fileName.split(".")[0])]
    );
  });
  return Routers;
};

module.exports = RoutersLoader;
