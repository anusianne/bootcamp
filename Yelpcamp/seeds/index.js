const mongoose = require("mongoose");
const Campground = require("../models/campground.js");
const cities = require("./cities.js");
const { places, descriptors } = require("./seedHelpers.js");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  console.log("Database seeding");
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "66abce61d366f15a17212131",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://picsum.photos/400?random=0.09844221446729784",
          filename: "YelpCamp/ahfnenvca4tha00h2ubt",
        },
        {
          url: "https://picsum.photos/400?random=0.0512001142707561",
          filename: "YelpCamp/ruyoaxgf72nzpi4y6cdi",
        },
      ],
      description: "lorem ipsum",
      price,
    });
    await camp.save();
  }
};

seedDB();
