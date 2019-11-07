const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const userController = require("./controllers/user.js");
const drinksController = require("./controllers/drinks.js");

//DB SETUP
mongoose.connect("mongodb://localhost:27017/drinksdb", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//CONTROLLERS
app.use("/admin", userController);
app.use("/drinks", drinksController);

// app.get("/", (req, res) => {
//   res.render("index.ejs", {
//     currentUser: req.session.currentUser
//   });
// });

app.listen(3000, () => {
  console.log("listening");
});
