const mongoose=require('mongoose');
const connectionUrl="mongodb://localhost:27017";
const dbname="ecomm";
const dbUrl=`${connectionUrl}/${dbname}`;
mongoose.connect(dbUrl);

