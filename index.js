process.env.NODE_ENV = process.env.NODE_ENV || "development";

var express = require("./config/express"),
  mongoose = require("./config/mongoose");

var db = mongoose();
var app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
