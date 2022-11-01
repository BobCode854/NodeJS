const fileSystem=require('fs')
const path=require('path')

const directoryPath=path.join(__dirname,'crud');
const filePath=`${directoryPath}/crud.txt`;

// Write something into file 
// Method : writeFileSync()

fileSystem.writeFileSync(filePath,"Crud operation starting")

//Read Specific File COntent
//Method : readFile()
//If we didnt pass utf-8 then it will return Buffer data.

fileSystem.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
});

// Update a file
// Method : appendFile()
// argument : fileLocation, content, and the err object in callback.
fileSystem.appendFile(filePath," and the filename is apple.txt",(err)=>{
    if(!err) console.log("file is updated")
})

// we can also rename the file
// Method : rename
// Argument : currentFileName, changeFileName, error object (optional)

fileSystem.rename(filePath,`${directoryPath}/RenamedCrud.txt`,(err)=>{
 if(!err) console.log("file successfully renamed")
})

// Delete a File
// Method : unlinkSync()
// Argument : filename

// Important : For deleting a file we have to comment other CRUD operations.

fileSystem.unlinkSync(`${directoryPath}/RenamedCrud.txt`);
