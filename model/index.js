const fs = require("fs");
//TODO : To Pascal Case

const Models = {};
fs.readdirSync("model/").forEach((fileName) => {
    Models[fileName.split(".")[0]] = require(fileName);
});

module.exports = Models;
