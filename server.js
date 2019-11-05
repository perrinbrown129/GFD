const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Drink = require("./models/drinks.js");
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/basiccrud", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

//DELETE
app.delete("/drinks/:id", (req, res) => {
  Drink.findByIdAndRemove(req.params.id, (err, deletedDrink) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/drinks");
    }
  });
});

//EDIT
app.get("/drinks/:id/edit", (req, res) => {
  Drink.findById(req.params.id, (err, foundDrink) => {
    if (err) {
      console.log(err);
    } else {
      res.render("edit.ejs", {
        drink: foundDrink
      });
    }
  });
});

app.put("/drinks/:id", (req, res) => {
  Drink.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDrink) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/drinks");
      }
      //   res.send(updatedDrink);
    }
  );
});

app.listen(3000, () => {
  console.log("listening");
});
