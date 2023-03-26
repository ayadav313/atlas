const express = require("express");
const app = express();

// Set up EJS as the template engine
app.set("view engine", "ejs");

// Define your routes
app.get("/", (req, res) => {
  res.render("main");
});

app.get("/route/dash", (req, res) => {
  res.render("route-dash");
});

app.get("/route/add", (req, res) => {
  res.render("route-add");
});

app.get("/building/index", (req, res) => {
  res.render("building-index");
});

app.get("*", (req, res) => {
  res.render("404");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
