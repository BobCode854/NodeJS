const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let database = result.db("ecomm");
  return database.collection("products");
}
module.exports=dbConnection;
/**
 *   We can handle PROMISE Response in 2 ways :
 *  --------------------------------------------------
 *    1) .then
 *    2) async await
 */

// 1. Handling Promise using .then

dbConnection().then((res) => {
  res
    .find({})
    .toArray()
    .then((data) => {
      console.log("data with .then: ", data);
    });
});

// 2. async await
const main = async () => {
  let connection = await dbConnection();
  let responseData = await connection.find({}).toArray();
  console.log("data with async await : ", responseData);
};
main();
