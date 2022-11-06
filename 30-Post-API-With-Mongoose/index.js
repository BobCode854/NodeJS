const express=require('express')
const product=require('./dbConfig') 
const app=express();
app.use(express.json());

app.post("/create",async(request,response)=>{
    let data=new product(request.body)
    let result=await data.save();
    console.log(result);
    response.send(result)
})
app.listen(5000);
