const express = require("express");
const router = express.Router();
const Drink = require("../models/drinks.js");

//INDEX
router.get("/", (req, res) => {
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
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//SHOW
router.get("/:id", (req, res) => {
  Drink.findById(req.params.id, (err, foundDrink) => {
    res.render("show.ejs", {
      drink: foundDrink
    });
  });
});

//CREATE
router.post("/", (req, res) => {
  Drink.create(req.body, (error, createdDrink) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/drinks");
    }
  });
});

//DELETE
router.delete("/:id", (req, res) => {
  Drink.findByIdAndRemove(req.params.id, (err, deletedDrink) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/drinks");
    }
  });
});

//EDIT
router.get("/:id/edit", (req, res) => {
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

router.put("/:id", (req, res) => {
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
    }
  );
});

module.exports = router;
