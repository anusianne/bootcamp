const express = require("express");
const app = express();
const User = require("./models/user");

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/secret", (req, res) => {
  res.send("THIS IS SECRET.");
});

app.listen(3000, () => {
  console.log("serving your app.");
});
