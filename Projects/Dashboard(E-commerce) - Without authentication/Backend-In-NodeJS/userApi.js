const express=require('express')
require("./db/dbConnection")
const cors=require('cors'); // this is require to deal with cors issue
const userCollection=require('./db/users')
const app=express();
app.use(cors());
app.use(express.json())
app.post("/registerUser",async(request,response)=>{
    const userInfo=new userCollection(request.body);
    let result=await userInfo.save();
    result=result.toObject();
    delete result.password;
    response.send(result);
})
app.post("/login",async(request,response)=>{
    const userInfo=request.body;
    if(userInfo.email && userInfo.password){
        let responseFromDB=await userCollection.findOne(userInfo).select("-password");
        if(responseFromDB){
            response.send(responseFromDB);
        }else{
            response.send({"result":"No User Found"})
        }
    }
    else{
        response.send({"result":"Provide both email and password"})
    }
    
    
})
app.get("/test",(request,response)=>{
    response.send("hiii")
})

app.listen(4000);