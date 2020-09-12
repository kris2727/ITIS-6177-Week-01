console.log("Hello World & System Integration Class");

//creating a simple server
const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Hello World & System Integration Class");
    res.end();
});

server.listen(9000);

//creating a node JS server using express
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World & System Integration Class from Express server')
})

app.listen(4000, () => {
  console.log('Express port listening at port 4000');
})