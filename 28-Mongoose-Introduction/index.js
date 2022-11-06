/**
 *  🌳 There are 2 Important things in Mongoose
 *    ---------------------------------------------------
 *      1) Schema
 *      2) Model
 * 
 *   1) Schema : The no of field inside a collection of a db is a  Schema. We 
 *               usually do this to apply validation on any field.
 * 
 *   2) Model :  Model use that schema to connect mongodb and NodeJs.
 */

 const url = "mongodb://localhost:27017/ecomm";

const mongoose=require('mongoose')
const main=async()=>{
    await mongoose.connect(url);
    const productsSchema=new mongoose.Schema({
        name : String
    });

    /* 
    In model we have to pass collection and the Schema(validation on schema)
    -----------------------------------------------------------------------
    Suppose If our productsSchema  contain only one field, and If we try to
    enter many data into the collection of a db then the query will execute
    but in collection only those field you will get which is being defined
    in the SCHEMA.

    */
    const productModel=mongoose.model('products',productsSchema);
    
    // Even though we are trying to enter multiple field data but It
    // will enter those only which is being defined in ProductsSchem

    let data=new productModel({name : "m8",price : 2000});
     let result=await data.save();
     console.log(result)
}
main();