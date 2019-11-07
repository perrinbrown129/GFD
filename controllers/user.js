const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Drinks = require("../models/drinks.js");

// router.get("/", (req, res) => {
//   User.findOne({ username: req.body.username }, (err, foundUser) => {
//     if (req.body.password == foundUser.password) {
//       res.send("Hello Perrin");
//     } else {
//       res.send("wrong password");
//     }
//   });
// });

// router.get("/perrin", (req, res) => {
//   const perrin = {
//     username: "pbrawr",
//     password: "password",
//     admin: true
//   };
//   User.create(perrin, (err, createdUser) => {
//     res.redirect("/drinks");
//   });
// });

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
      // res.redirect("/drinks");
    } else {
      res.send("wrong password");
    }
  });
});

router.get("/new", (req, res) => {
  res.render("admin/new.ejs");
});

module.exports = router;
