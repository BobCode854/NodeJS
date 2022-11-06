const express = require("express");
require("./dbConfig");
const product = require("./product");
const app = express();
const mongodb = require("mongodb");
app.use(express.json());

app.get("/search/:key", async (request, response) => {
  const result = await product.find({
    $or: [
      {"name" : {$regex : request.params.key}}, // we can apply search to different field of collection.
   {"brand" : {$regex : request.params.key}}
    ],
  });
  response.send(result);
});
app.listen(5000);
