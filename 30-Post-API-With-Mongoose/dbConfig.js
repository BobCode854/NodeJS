const url = "mongodb://localhost:27017/ecomm";
const mongoose = require("mongoose");

mongoose.connect(url);

/*
      But this is not the good way usually.
      We have created product collection only  and we have connected like this.
      but suppose if we have multiple collection we cannot define all in one file
      As well as Creating moongose connection everytime.


      Best Solution
      ------------------
      Moongoose connection in one file
      And collection based Schema COnfiguration in one file.
      Check Next project FOr this.
*/
const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const productModel = mongoose.model("products", productsSchema);

module.exports = productModel;
