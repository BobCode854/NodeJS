/**
 *  Installed Package
 * -----------------------
 *  npm install express
 *  npm install ejs
 * 
 * EJS (Embedded Javascript Template ) help to render the dynamic content to the file.
 * We must have View folder as internally EJS template engine render to view folder.
 */

 const express = require("express");
 const app = express();
 const path = require("path");
 
  // EJS Section
  app.set('view engine','ejs') // this is required
  // Ended

 const publicPath = path.join(__dirname, "public");
 app.get("", (req, resp) => {
   resp.sendFile(`${publicPath}/index.html`);
 });
 app.get('/help', (req, resp) => {
   resp.sendFile(`${publicPath}/help.html`);
 });
 app.get('/about', (req, resp) => {
   resp.sendFile(`${publicPath}/about.html`);
 });


 app.get('/profile', (req, resp) => {
     const user={
         name : 'karan raj sinha',
         email : 'karan@test.com',
         city : 'Daltonganj',
         skills : ['Java','Node','React','Express']
     }
    resp.render('profile',{user})
  });


 app.get('*', (req, resp) => {
     resp.sendFile(`${publicPath}/NotFound.html`);
   });
 app.listen(5000);
 
