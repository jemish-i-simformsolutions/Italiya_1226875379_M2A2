const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//to handle the /hello request
app.get("/hello", (req, res) => {
  res.render("index");
});

//to handle the calculate request
app.post("/calculate", (req, res) => {
  // I executed code differently here
  res.render("result", { data: req.body });
});

//app is running on port 3000
app.listen(3000, () => {
  console.log("port is running on 3000");
});
