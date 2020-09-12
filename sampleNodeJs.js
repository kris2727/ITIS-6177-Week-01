console.log("Hello World & System Integration Class");
const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Hello World & System Integration Class");
    res.end();
});

server.listen(9000);