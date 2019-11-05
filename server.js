const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Drink = require("./models/drinks.js");

app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/basiccrud", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//NEW
app.get("/drinks/new", (req, res) => {
  res.render("new.ejs");
});

//SHOW
app.get("/drinks/:id", (req, res) => {
  Drink.findById(req.params.id, (err, foundDrink) => {
    res.render("show.ejs", {
      drink: foundDrink
    });
  });
});

//CREATE
app.post("/drinks/", (req, res) => {
  Drink.create(req.body, (error, createdDrink) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/drinks");
    }
  });
});

//INDEX
app.get("/drinks", (req, res) => {
  Drink.find({}, (error, allDrinks) => {
    if (error) {
      res.send(error);
    } else {
      res.render("index.ejs", {
        drinks: allDrinks
      });
    }
  });
});

app.listen(3000, () => {
  console.log("listening");
});
