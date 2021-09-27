const https = require('https');
const http = require('http');
const express = require("express");

const cors = require("cors");
const cookieParser = require('cookie-parser')

const asciify = require("asciify");
const morgan = require("morgan");
const fs = require("fs");
const { connect, sync } = require("./init-connection");

const app = express();
app.use(cors());
app.use(morgan("combined"));
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


  await  asciify("Korri", { font: "epic", color: "green" }, function (err, res) {
    console.log(res);
  });



  const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt'),
  };
  if (process.env.NODE_ENV === "development"){
    http.createServer(app).listen(process.env.PORT);
    console.log(
        `\nWelcome to Yunniq API 0.0.1! Listening on port ${process.env.PORT}` +
        `\nRunning on environment: ${process.env.NODE_ENV}`
    );
  }
  else {
    http.createServer(app).listen(80);
    https.createServer(options, app).listen(443);
    console.log(
        `\nWelcome to Yunniq API 0.0.1! Listening on port 80 and 443` +
        `\nRunning on environment: ${process.env.NODE_ENV}`
    );
  }


})();
