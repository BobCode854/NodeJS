const dbConnection=require('./mongodbconfig');

const updateQuery=async()=>{
    let connection = await dbConnection(); 
    let result=await connection.updateOne({name : "m40"},{$set : {brand : 'New Samsung'}});
    if(result.acknowledged){
        console.log("updated :")
    }
}
updateQuery();

// updateOne - single update (first find in db)
// updateMany or update (for multiple updates)