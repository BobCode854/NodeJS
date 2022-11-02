const express=require('express')
const app=express();
const path=require('path')

const publicPath=path.join(__dirname,'public')
app.use(express.static(publicPath)) // .static method is used to load static content in express
app.listen(5000);

