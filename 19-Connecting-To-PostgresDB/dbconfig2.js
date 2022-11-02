/**
 * This is second way
 */
const { response } = require("express");
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "karan",
  port: 5432,
  database: "postgres",
});

async function getData(){
let result= await client.connect();  // this will return promise
let db=result.db(client.database)
let collection=db.collection('public')
console.log("collection : ",collection)
}
getData();


// client.query("select * from persons", (err, response) => {
//   if (!err) {
//     console.log(response.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end;
// });
