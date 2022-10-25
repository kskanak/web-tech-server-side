const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const catagories = require("./data/catagories.json");
const catagorydetails = require("./data/catagorydetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("api created");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("/catagorydetails", (req, res) => {
  res.send(catagorydetails);
});
app.get("/catagorydetails/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const details = catagorydetails.find((catagory) => catagory.id === id);
  res.send(details);
});
app.listen(port, () => {
  console.log("api running on port", port);
});
