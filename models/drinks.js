const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  website: { type: String, required: true },
  ABV: { type: Number, required: true },
  description: { type: String },
  flavors: { type: String },
  locator: { type: String }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
