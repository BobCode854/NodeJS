const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    pName : String,
    price : String,
    user : String,
    category : String
})

const productModel=mongoose.model("products",productSchema);
module.exports=productModel;