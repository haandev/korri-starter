const express = require("express");
const cors = require("cors");
const asciify = require("asciify");

const { connect, sync } = require("./init-connection");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  await connect();

  const routers = require("./init-router")(app);
  //require("./init-swagger")(app, routers);
  await sync();

  app.get("/", function (request, response) {
    response.send("Welcome to Yunniq API 0.0.1!");
  });

  app.listen(process.env.APP_PORT, () => {
    asciify("Korri", { font: "epic", color: "green" }, function (err, res) {
      console.log(res);
      console.log(
        `\nWelcome to Yunniq API 0.0.1! Listening on port ${process.env.APP_PORT}` +
          `\nhttp://localhost:${process.env.APP_PORT}` +
          `\nRunning on environment: ${process.env.NODE_ENV}`
      );
    });
  });
})();
