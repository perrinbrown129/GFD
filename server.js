const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const drinksController = require("./controllers/drinks.js");

mongoose.connect("mongodb://localhost:27017/basiccrud", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/drinks", drinksController);

app.listen(3000, () => {
  console.log("listening");
});
