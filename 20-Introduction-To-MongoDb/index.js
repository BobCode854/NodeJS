/**
 * 
 * ------------------- FACTS ABOUT MONGODB --------------------------------
 * 
 *  💃 MongoDB is a NoSQL database.
 *       -) It means mongodb has non-structured db.
 * 
 *  💃 The data is stored in a collection.
 *       -) It means instead of table, data will be stored as a collection.
 * 
 *  💃 Collection dont have row and column.
 *       -) Data is stored in the form of Object. 
 *  
 *  💃 Example.
 *      {
 *           "name"    : "karan",
 *           "age"     :  22,
 *           "company" : "Mercedes"
 *      }
 * 
 *    It is best when you dont know how much data will come as it will not take extra
 *    memory of column where data is not present ( non-madatory or optional field in form)
 * 
 * 💃 Commands : 
 *        🚿 show dbs 
 *        ---------------
 *         return total databases present inside mongodb.
 * 
 *       🚿  use dbs_name 
 *        --------------------
 *        If exist, It will switch to this database,
 *        If not, It will create database and switch to it(but it will not show until you will create collection 
 *                            inside it ).
 *        
 *       🚿  create collection in particular database
 *       -----------------------------------------------
 *        a) use youtube ( where youtube lets suppose a database)
 *        b) youtube > db.createCollection('collectionName');
 * 
 *       🚿 Show collections in a database
 *         --------------------------------------
 *          show collection
 *         
 *       🚿 Delete a Collection
 *         -------------------------
 *           db.collection_name.drop()
 * 
 *       🚿 Delete a Database
 *          -------------------------
 *           db.dropDatabase();
 *        
 *       🚿 create data inside a collection in database
 *          ----------------------------------------------
 *           db.collection_name.insertOne({"name":"karan sinha","age":20}) 
 * 
 *       🚿  how to check data in a collection
 *          --------------------------------------
 *            db.collection_name.find()
 * 
 *       🚿 update the collection data.
 *          -----------------------------------------
 *         db.collection_name.updateOne({"name":"m40"},{$set :{ brand : 'Samsung'}})
 * 
 *         
 *        🚿 delete one data from collection
 *         --------------------------------------
 *          db.collection_name.deleteOne({"name":"m40"})
 * 
 *       
 *        
 * 
 *       
 * 
 */
 