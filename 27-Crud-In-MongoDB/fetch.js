const dbConnection = require("./mongodbconfig");

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
