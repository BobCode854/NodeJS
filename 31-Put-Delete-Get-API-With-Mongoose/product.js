const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const productModel = mongoose.model("products", productsSchema);
  
  module.exports = productModel;