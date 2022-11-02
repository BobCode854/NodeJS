const config = require("./mongodbconfig");

const insertQuery = async () => {
  let connection = await config();
  let result = connection.insertOne({
    name: "Voltas Advance AC New",
    brand: "Chinese",
    price: 500,
    category: "Window AC",
  });
  if (result.acknowledged) {
    console.log("data inserted successgully")
  }
 
};

const insertMultiple = async () => {
  let connection = await config();
  let result = connection.insertMany([
    {
      name: "UNO",
      brand: "YUNO",
      price: 10,
      category: "Card",
    },
    {
      name: "diwan",
      brand: "TATA ",
      price: 100,
      category: "Bedding",
    },
  ]);
  if (result.acknowledged) {
    console.log("Multiple data inserted successgully")
  }
};
insertQuery();
insertMultiple();
