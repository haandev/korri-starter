const express = require("express");

const cors = require("cors");
const cookieParser = require('cookie-parser')

const asciify = require("asciify");
const morgan = require("morgan");
console.log("environment",process.env)
const { connect, sync } = require("./init-connection");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser())


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (request, response) {
  response.send("Welcome to Yunniq API 0.0.1!");
});
(async () => {
  await connect();

  const routers = require("./init-router")(app);
  //require("./init-swagger")(app, routers);
  await sync();


  const port = process.env.PORT || 3000
  const host = process.env.HOST || "localhost"
  const server = app.listen(port ,host , () => {
    asciify("Korri", { font: "epic", color: "green" }, function (err, res) {
      console.log(res);
      console.log(
        `\nWelcome to Yunniq API 0.0.1! Listening on port ${server.address().port}` +
          `\nhttp://${server.address().address}:${server.address().port}` +
          `\nRunning on environment: ${process.env.NODE_ENV}`
      );
    });
  });
})();
