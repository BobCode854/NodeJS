const dbConnection=require('./mongodbconfig');

const deleteOne=async()=>{
    const dbInformation=await dbConnection();
    const result=await dbInformation.deleteOne({"name":"iphone13"});
    (result.acknowledged )? console.log("Data Deleted")  : console.log("Error");
}

const deleteMany=async()=>{
    const dbInformation=await dbConnection();
    const result=await dbInformation.deleteMany({"brand":"TATA"});
    (result.acknowledged )? console.log("Data Deleted")  : console.log("Error");
}
deleteOne();
deleteMany();
