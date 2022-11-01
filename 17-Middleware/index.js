/**
 *
 * ❓  What is middleware ?
 *       When some modification is required is needed to be done before
 *       the execution of request in server middleware is that which
 *       perform that role.
 *
 * ❓ What is Route level middleware ?
 *     A middleware which will work one single route, or group of routes
 *     or all the routes.
 *
 * ❓  MiddleWare method and syntax
 *      Method : use method
 *      Syntax : server.use((request,response,next)){
 *          //modify request here
 *          next(); // It will call next middleware If any.
 *       });
 *
 * ❓  Give some Middleware name
 *       1) body-parser (for request body data parsing)
 *       2) express.static (for static file hosting)
 *       3) morgan (for logging server req/res data)
 *       4) session (For session management)
 *
 * 
 *
 */

const express = require("express");
const app = express();

const requestFilter = (request, response, next) => {
  if (!request.query.age) {
    response.send("please Enter the Age");
  } else if (request.query.age < 18) {
    response.send("you are under age. you cannot open this page");
  } else {
    next();
  }
};
app.use(requestFilter); // here we are using middleware in entire app module.
app.get("/", (request, response) => {
  response.send("Welcome to HomePage");
});
app.get("/about", (request, response) => {
  response.send("Welcome to AboutPage");
});
app.get("/contact", (request, response) => {
  response.send("Welcome to ContactPage");
});
app.get("/help", (request, response) => {
  response.send("Welcome to HelpPage");
});

app.listen(5000);
