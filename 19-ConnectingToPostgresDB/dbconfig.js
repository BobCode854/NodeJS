/**
 * This is one way
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

client.connect(); // this will return promise

client.query("select * from persons", (err, response) => {
  if (!err) {
    console.log(response.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
