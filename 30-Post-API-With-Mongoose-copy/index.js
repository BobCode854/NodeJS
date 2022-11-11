const express=require('express')
require('./dbConfig') // this is for dbCOnfig
const product=require('./product') // this is for connection to collection object in db.
const app=express();
app.use(express.json());

app.post("/create2",async(request,response)=>{
    let data=new product(request.body)
    let result=await data.save();
    console.log(result);
    response.send(result)
})
app.listen(5000);
