const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("request object : ",req);
    res.send(`Welcome : ${req.query.name}`)
})

app.get('/about',(req,res)=>{
    res.send("This is my aboutPage")
})

app.listen(5000);