const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let database = result.db("ecomm");
  return database.collection("products");
}
module.exports = dbConnection;


