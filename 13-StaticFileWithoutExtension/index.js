const express = require("express");
const app = express();
const path = require("path");

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
app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/NotFound.html`);
  });
app.listen(5000);
