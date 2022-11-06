const express = require("express");
require("./dbConfig"); // this is for dbCOnfig
const product = require("./product"); // this is for connection to collection object in db.
const app = express();
const mongodb = require("mongodb");
app.use(express.json());

app.post("/create2", async (request, response) => {
  let data = new product(request.body);
  let result = await data.save();
  console.log(result);
  response.send(result);
});
app.get("/fetchProductByName/:name", async (request, response) => {
  let result = await product.findOne({ name: request.params.name });
  console.log(result);
  response.send(result);
});
app.get("/fetchAll", async (request, response) => {
  let result = await product.find();
  console.log(result);
    response.send(result);
});
app.put("/updateById/:id", async (request, response) => {
  console.log("Entetred");
  const result = await product.updateOne(
    { _id: new mongodb.ObjectId(request.params.id) },
    {
        // we can pass this with req.body also
      $set: {
        name: "karan",
        price: 1000,
        brand: "Mercedes",
        category: "Full-Stack",
      },
    }
  );
  console.log(result);
  response.send(result);
});
app.delete("/deleteByName/:name", async (request, response) => {
  const result = await product.deleteOne({ name: request.params.name });
  console.log(result);
  response.send(result);
});

/*  here _id is must. you cannot send id . If you want to pass id only
    then you need to  create mongoDB object
    then with the help of object Id you can pass.
    Line no 27 for reference
*/

app.delete("/deleteById/:_id", async (request, response) => {
  let result = await product.deleteOne(request.params);
  response.send(result);
});
app.listen(5000);
