const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const catagories = require("./data/catagory.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("api created");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.listen(port, () => {
  console.log("api running on port", port);
});
