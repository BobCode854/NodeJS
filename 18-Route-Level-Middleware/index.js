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
 * ❓ How to install middleware ?
 *         npm install
 *
 */

/**
 *  In this example we will create middleware in
 *  different file so that we can maintain different
 *  middlewares.
 *
 *
 */
const express = require("express");
const app = express();
const requestFilter = require("./middleware");
const router = express.Router();
router.use(requestFilter);

app.get("/", (request, response) => {
  response.send("Welcome to HomePage");
});
router.get("/about", (request, response) => {
  response.send("Welcome to AboutPage");
});
router.get("/contact", (request, response) => {
  response.send("Welcome to ContactPage");
});
app.get("/help", (request, response) => {
  response.send("Welcome to HelpPage");
});

app.use("/", router);

app.listen(5000);
