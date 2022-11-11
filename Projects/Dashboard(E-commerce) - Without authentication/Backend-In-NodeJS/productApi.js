const express = require("express");
require("./db/dbConnection");
const cors = require("cors"); // this is require to deal with cors issue
const productCollection = require("./db/products");
const { request } = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/addProduct", async (request, response) => {
  const productObject = new productCollection(request.body);
  let result = await productObject.save();
  response.send(result);
});
app.get("/getProducts", async (request, response) => {
  let allProducts = await productCollection.find();
  if (allProducts.length > 0) response.send(allProducts);
  else response.send({ result: "No Product Found" });
});
app.delete("/delete/:id", async (request, response) => {
  let result = await productCollection.deleteOne({ _id: request.params.id });
  response.send(result);
});
app.get("/getProduct/:id", async (request, response) => {
  let result = await productCollection.findOne({ _id: request.params.id });
  if (result) {
    response.send(result);
  } else {
    response.send({ result: "No Result Found" });
  }
});

app.put("/update/:id", async (request, response) => {
    console.log("request body : ",request.body)
  let result = await productCollection.updateOne(
    {
      _id: request.params.id,
    },
    {
      $set: {
        pName: request.body.pName,
        price: request.body.price,
        category: request.body.category,
      },
    }
  );
   response.send(result);
});

//Here by default it is case sensitive
app.get('/search/:key',async(request,response)=>{
  let result= await productCollection.find({
    "$or":[
         {pName: {$regex :request.params.key}},
         {price: {$regex :request.params.key}},
         {category: {$regex :request.params.key}}
    ]
  })
  response.send(result)
})

app.listen(7000);
