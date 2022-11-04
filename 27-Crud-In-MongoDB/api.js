const express = require("express");
const mongoDB = require("mongodb");
const dbConnect = require("./mongodbconfig");
const app = express();
app.use(express.json()); /* This line is required to get post API body data 
                            you will get postman body data with this line
                             This will add body parameter to req object.*/

app.get("/", (request, response) => {
  response.send("hello");
});
app.get("/findAll", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.find({}).toArray();
  response.send(result);
});
app.get("/findByName", async (request, response) => {
  const dbInformation = await dbConnect();
  const name = request.query.name;
  const result = await dbInformation
    .find({ name: request.query.name })
    .toArray();
  response.send(result);
});
app.post("/addProduct", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.insertOne(request.body);
  if (result.acknowledged) {
    response.send(result);
  }
});

app.post("/addAllProduct", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.insertMany(request.body);
  if (result.acknowledged) {
    response.send(result);
  }
});
/** Updating single data where condition and data both hardcoded */

app.put("/updateProduct", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.updateOne(
    { name: "worlpool" },
    { $set: { brand: "Samsung" } }
  );
  if (result.acknowledged) {
    response.send(result);
  }
});

/** Updating all matching data where condition and data both hardcoded */

app.put("/updateAllProduct", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.updateMany(
    { name: "Voltas Advance AC New" },
    { $set: { brand: "TATA" } }
  );
  if (result.acknowledged) {
    response.send(result);
  }
});

/** Updating single data where condition is dynamic coming from postman */

app.put("/updateAllProductDynamic", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.updateMany(
    { name: request.body.name },
    { $set: request.body }
  );
  if (result.acknowledged) {
    response.send(result);
  }
});

/** Updating single data where updated Object is dynamic coming from postman
 *   and condition is coming from pathParam
 */

app.put(
  "/updateAllProductDynamicPathParam/:name",
  async (request, response) => {
    console.log("ENtered");
    const dbInformation = await dbConnect();
    const result = await dbInformation.updateMany(
      { name: request.params.name }, // condition
      { $set: request.body } // data to update
    );
    if (result.acknowledged) {
      response.send(result);
    }
  }
);

/**
 *     Delete By Id we will perform
 *     In mongodb it is not id it is _id
 *     and it is of type ObjectId
 * 👿  In order to get ObjectId we need to use mongodb object
 * 👿  Requirement :
 *      ----------------
 *      1) const mongoDB=require('mongodb') //This will bring mongodb API
 *                                            from which we can create object
 *
 *      2) new mongodb.ObjectId(req.param.id) // we need to pass Id which is
 *                                               coming as path param to ObjectId.
 *
 */

app.delete("/deleteById/:id", async (request, response) => {
  const dbInformation = await dbConnect();
  const result = await dbInformation.deleteOne({
    _id: new mongoDB.ObjectId(request.params.id),
  });
  if (result.acknowledged) {
    response.send(result);
  }
});
app.listen(5000);
