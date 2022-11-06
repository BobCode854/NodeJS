const url = "mongodb://localhost:27017/ecomm";
const mongoose = require("mongoose");

mongoose.connect(url);
const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const productModel = mongoose.model("products", productsSchema);
  let data = new productModel({
    name: "mKaran2",
    price: 100000,
    brand: "MercedesNew",
    category: "Person2",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB=async()=>{
    const productModel = mongoose.model("products", productsSchema);
    const data=await productModel.updateOne(
        {name : 'mKaran2'},
        {$set : {name : 'mKaran4', price : 5100}}
        )
     console.log(data);   
}
const deleteInDB=async()=>{
    const productModel = mongoose.model("products", productsSchema);
    const data=await productModel.deleteOne({name : 'mKaran2'});
    console.log(data);
}
const deleteAllInDB=async()=>{
    const productModel = mongoose.model("products", productsSchema);
    const data=await productModel.deleteMany({name : 'mKaran'});
    console.log(data);
}

const fetchFromDB=async()=>{
    const productModel = mongoose.model("products", productsSchema);
    const data=await productModel.findOne({name : "UNO"});
    console.log(data)
}


//saveInDB();
//updateInDB();
//deleteInDB();
//deleteAllInDB();
fetchFromDB();