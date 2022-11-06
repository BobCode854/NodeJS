const url = "mongodb://localhost:27017/ecomm";
const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect(url);
  const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const productModel = mongoose.model("products", productsSchema);
  let data = new productModel({
    name: "m10",
    price: 2000,
    brand: "Samsung",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};
main();
