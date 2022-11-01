const http=require('http')

http.createServer((request, response)=>{
response.write("<h1>Hello karan this is your first page</h1>");
response.end();
}).listen(4500);