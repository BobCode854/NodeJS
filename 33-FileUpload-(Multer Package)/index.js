const express=require('express');
const multer=require('multer')
const app=express();

//upload file object

const upload=multer({
    storage : multer.diskStorage({
        destination : function (req,file,cb){
            cb(null,"uploads")
        },
        filename : function (req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file");

//ended

app.post("/fileUpload",upload,(request,response)=>{
response.send("file uploaded")
})

app.listen(5000);