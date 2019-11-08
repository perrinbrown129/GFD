const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const userController = require("./controllers/user.js");
const drinksController = require("./controllers/drinks.js");
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/drinksdb";

//DB SETUP
mongoose.connect(MONGODB_URI, {
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

app.listen(PORT, () => {
  console.log("listening");
});
