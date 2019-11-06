const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (req.body.password == foundUser.password) {
      res.send("Hello Perrin");
    } else {
      res.send("wrong password");
    }
  });
});

router.get("/new", (req, res) => {
  res.render("admin/new.ejs");
});

module.exports = router;
