const mongoose = require("mongoose");
const DrinksModel = require("./drinks.js");
const UserModel = require("./user");

const seedDrinks = [
  {
    name: "White Claw Hard Seltzer",
    img:
      "https://products0.imgix.drizly.com/ci-white-claw-pure-hard-seltzer-8c3d9ae4944e651e.png?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "whiteclaw.com",
    ABV: 5,
    description:
      "White Claw is a refreshing hard seltzer with 5% alcohol. With 100 calories, 2g of carbs, and natural flavors in every can, White Claw is pure refreshment for your balanced, active lifestyle. Each sip features a perfect blend of pure seltzer water, 5% alcohol, and just a hint of natural flavors. That's right: you won't find any preservatives, dietary fiber or crystalline fructose added to this beverage. You'll just enjoy a pure, gluten-free beverage, made for any occasion. ",
    flavors:
      "Natural Lime, Ruby Grapefruit, Mango, Black Cherry, Raspberry, Pure",
    locator: "https://www.whiteclaw.com/#locator"
  },
  {
    name: "Downeast Cider",
    img:
      "https://products1.imgix.drizly.com/ci-downeast-cider-original-blend-e937cd9d954fe0c0.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://downeastcider.com/",
    ABV: 5.1,
    description:
      "Five fresh apples go into a can of Downeast. Filtering them out would mean filtering out flavor. Nope. We leave the food stuff in there. It's the reason our cider tastes like...well, cider. Unfiltered: The way it should be",
    flavors:
      "Original Blend, Double Blend, White, Grapefruit, Aloha Friday, Pumpkin Blend, Winter Blen",
    locator: "https://downeastcider.com/pages/locator"
  },
  {
    name: "Bon & Viv Spiked Seltzer",
    img:
      "https://www.williamsdistributing.com/wp-content/uploads/2015/12/CRANBERRY.jpg",
    website: "https://www.bonandvivspikedseltzer.com/",
    ABV: 4.5,
    description:
      "We make BON & VIV™ Spiked Seltzer using select ingredients including purified water and natural fruit flavors to create the 4.5% alcohol and a clean, crisp taste. With no barley or wheat, BON & VIV™ Spiked Seltzer is gluten free.",
    flavors:
      "Pear Elderflower, Clementine Hibiscus, Black Cherry Rosemary, Grapefruit, Lemon Lime, Cranberry",
    locator: "https://www.bonandvivspikedseltzer.com/#locator"
  },
  {
    name: "Angry Orchard Cider",
    img:
      "https://products3.imgix.drizly.com/ci-angry-orchard-crisp-apple-cider-b7dc378f12558f5e.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://www.angryorchard.com/",
    ABV: 5,
    description:
      "Angry Orchard Crisp Apple Cider has a bright, crisp apple flavor, just like biting into a fresh apple. It is a perfect balance of sweetness and bright acidity from culinary apples and dryness of traditional cider making apples, resulting in a complex, yet refreshing, hard cider.",
    flavors:
      "Crisp Apple, Traditional Dry, Apple Ginger, Cinnful Apple, Green Apple, Rosé, Summer Honey, Hop'n Mad Apple, Elderflower, Stone Dry, Easy Apple ",
    locator: "https://www.angryorchard.com/locations"
  },
  {
    name: "Mighty Swell Spiked Spritzer",
    img:
      "https://products0.imgix.drizly.com/ci-mighty-swell-watermelon-mint-b3f1a356a867944d.png?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://mightyswell.com/",
    ABV: 5,
    description:
      "Mighty Swell offers a session-worthy, fruit forward spritzer containing 5% ABV. With only 110 calories and 4 grams of sugar per can, every gluten free spritzer is a reason to Swellebrate.",
    flavors: "Cherry Lime, Watermelon Mint, Grapefruit, and Peach",
    locator: "https://mightyswell.com/find-us/"
  },
  {
    name: "Strongbow Cider",
    img:
      "https://products2.imgix.drizly.com/ci-strongbow-gold-apple-f54e949143c15d37.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "http://www.strongbow.com/en-us",
    ABV: 5,
    description:
      "Strongbow Gold Apple Cider has a wonderful transparent gold color, a rich and complex aromatic array dominated by several varieties of apple and a refreshing texture with a true balance between first acidity, sharpness and sourness; and then sweetness and softness.",
    flavors:
      "Gold Apple, Original Dry, Pear Secco, Rosé Apple, Artisanal Blend",
    locator: "http://www.strongbow.com/en-us"
  },
  {
    name: "Cape Line Sparkling Cocktails",
    img:
      "https://products1.imgix.drizly.com/ci-cape-line-hard-strawberry-lemonade-530583db100af0b6.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://www.capeline.com/",
    ABV: 4.5,
    description:
      "Cape Line Sparkling Cocktails turns traditional sparkling water cocktails into something more fresh and exciting. Inspired by that place where the land meets the water, Cape Line Sparkling Cocktails were created to deliver a refreshing and flavorful take on hard strawberry lemonades without being overly sweet.",
    flavors: "Hard Strawberry Lemonade, Margarita, Blackberry Mojito",
    locator: "https://www.capeline.com/"
  },
  {
    name: "Austin Eastciders",
    img:
      "https://products2.imgix.drizly.com/ci-austin-eastciders-dry-cider-47e697dc8ee051a8.png?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://austineastciders.com/",
    ABV: 5,
    description:
      "Crisp at its core. A crisp, smooth dry craft cider made with European bittersweet apples and American dessert apples. Did you know our cider contains roughly two-thirds less sugar than our largest competitors? That means less time spent at the gym, more time enjoying a cider you can feel good about drinking.",
    flavors:
      "Original Dry, Brut Super Dry, Blood Orange, Pineapple, Watermelon, Rosé Dry, Texas Honey, Ruby Red Grapefruit, Hopped, Lemon Ginger, Spiced, Texas Brut Super Dry, Pear Rosemary",
    locator: "https://austineastciders.com/pages/store-locator"
  },
  {
    name: "High Noon Hard Seltzer",
    img:
      "https://products0.imgix.drizly.com/ci-high-noon-sun-sips-watermelon-6e4a1ea43cff2a5c.png?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://www.highnoonspirits.com/",
    ABV: 4.5,
    description:
      "High Noon Hard Seltzer is made with Real Vodka, Real Juice and Sparkling Water. It has only 100 calories*, no sugar added and is gluten free. Our vodka is made with the finest quality Midwest corn and is distilled 5x for unparalleled smoothness. It's best served COLD and enjoyed straight out of the can. ",
    flavors: "Grapefruit, Black Cherry, Pineapple and Watermelon",
    locator: "https://www.highnoonspirits.com/where-to-buy"
  },
  {
    name: "Ace Cider",
    img:
      "https://products3.imgix.drizly.com/ci-ace-apple-hard-cider-32c69122319013c1.png?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://www.acecider.com/",
    ABV: 5,
    description:
      "ACE ciders are a refreshing alternative to beer and wine. No sugar is added to our beverages! The only sugar occurs naturally from fresh fruit, making our ciders crisp in taste and flavor. Our award winning ACE ciders are pure, clean and refreshing because we use only the best eating apples for our juice and the best ingredients we can buy. We use champagne yeast in all of our cider and ferment them 10 -14 days. We then cold – filter 4 times and add the perfect amount of carbonation to quench your thirst! Enjoy!",
    flavors:
      "Apple, Berry Rosé, Ginger, Hazy Hop, Honey, Joker, Perry, Pineapple, Pumpkin, spACE",
    locator: "https://www.acecider.com/find-our-cider"
  },
  {
    name: "Truly Hard Seltzer",
    img:
      "https://products2.imgix.drizly.com/ci-truly-spiked-sparkling-colima-lime-16647078cf469e9d.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "https://trulyhardseltzer.com/",
    ABV: 5,
    description:
      "Truly Hard Seltzer is light, crisp and refreshing with a hint of fruit flavor. 5% alc./vol., 100 calories, 1 gram of sugar, gluten free.",
    flavors:
      "Black Cherry, Wild Berry, Blueberry & Acai, Raspberry Lime, Orange, Lime, Grapefruit, Lemon, Passion Fruit, Pineapple, Watermelon & Kiwi, Mango, Rosé",
    locator: "https://trulyhardseltzer.com/"
  },
  {
    name: "Woodchuck Cider",
    img:
      "https://products3.imgix.drizly.com/ci-woodchuck-amber-hard-cider-4d4e4de23894b48a.jpeg?auto=format%2Ccompress&fm=jpeg&q=20",
    website: "http://www.woodchuck.com/",
    ABV: 5,
    description:
      "The Woodchuck Cider is America's original cider. It's made from a blend of apples and fermented with champagne yeast to produce a great tasting and refreshing alcoholic drink from Vermont. ",
    flavors:
      "Amber, Bubbly Pearsecco, Sangria, Bubbly Rosé, Granny Smith, Raspberry, Pear",
    locator: "http://www.woodchuck.com/locator/"
  }
];

const admin = {
  username: "pbrawr",
  password: "password",
  admin: true
};

// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "drinksdb";
  // const dbURI = `mongodb://localhost:27017/${dbName}`;

  // Changing dbURI for heroku deployment
  const MONGODB_URI =
    process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));
  dbConnection.on("connected", () =>
    console.log("DB Connected to: ", MONGODB_URI)
  );
  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${MONGODB_URI}`)
  );

  DrinksModel.collection.drop();
  UserModel.collection.drop();

  DrinksModel.create(seedDrinks, (err, newDrinks) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newDrinks);
    }
  });

  UserModel.create(admin, (err, newAdmin) => {
    if (err) {
      console.log("Create Admin Error: ", err);
    } else {
      console.log("Created admin: ", newAdmin);
    }
  });

  // Close db connection after everything is completed
  //   dbConnection.close();
};

seedDB();
