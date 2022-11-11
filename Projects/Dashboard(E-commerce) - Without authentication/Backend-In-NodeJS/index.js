/**
 *  npm init --- It will create package.json file // this is enough . no need to do git init
 *  git init --- It will intiialise empty git package
 */
const express=require('express')
const app=express();

app.get("/",(request,response)=>{
  response.send("App started")
});
app.listen(6000);