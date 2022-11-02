const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData() {

 // Connecting to mongodb
  let result = await client.connect();
 // console.log("result : ", result);

  /* this will return promise . handling with asynch await

      without await = return Promise<Pending>
      with await = return data.
    */

// Now inside mongodb there can be many database which database to connect
let database=result.db('ecomm');

// Now in this database there can be many collection which collection to fetch data
let collection=database.collection('products')
let response=await collection.find({}).toArray(); // toArray() will return promise.
console.log("Collection :",response) 
  
}
getData();
