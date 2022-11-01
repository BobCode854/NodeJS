/**
 *
 * 💁  Information
 * --------------------------------------
 *
 *  In this Folder we will try to take instruction from command line and create and
 *  delete file from that instruction.
 *
 * We will take help of ARGV properties of PROCESS object.
 *
 */

// console.log(process) // This process Object contains almost everything of node.js

console.log(process.argv[2]);

const fileSystem = require("fs");
const path = require("path"); // this is required when you need directory location, filename and etc..

/**
 const operation = process.argv[2];
 const fileName = process.argv[3];

if (operation === "add") {
  const fileContent = process.argv[4];
  fileSystem.writeFileSync(fileName, fileContent);
} else if (operation === "remove") {
  fileSystem.unlinkSync(fileName);
}

 */

// 👩‍🎤 we can create file in loop also and in seperate folder

const operation = process.argv[2];
const fileName = process.argv[3];
const directoryLocation = path.join(__dirname, "files"); // C:\NodeJS\6-CommandLineInput\files (Location were I need to create files)

if (operation === "add") {
  const fileContent = process.argv[4];
  for (i = 0; i < 5; i++) {
    fileSystem.writeFileSync(`${directoryLocation}/hello${i}.txt`, fileContent);
  }
} else if (operation === "remove") {
  fileSystem.unlinkSync(fileName);
}
