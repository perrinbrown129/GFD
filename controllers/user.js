const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Drinks = require("../models/drinks.js");

router.post("/login", (req, res) => {
  console.log("sent:", req.body);
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (req.body.password == foundUser.password) {
      Drinks.find({}, (err, allDrinks) => {
        if (err) {
          console.log(err);
        } else if (foundUser.admin) {
          res.render("admin/index.ejs", {
            drinks: allDrinks,
            admin: true
          });
        }
      });
    } else {
      res.send("wrong password");
    }
  });
});

router.get("/new", (req, res) => {
  res.render("admin/new.ejs");
});

module.exports = router;
