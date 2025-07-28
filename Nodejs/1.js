const fs= require("fs");
fs.writeFileSync("hello.txt","hi");

console.log("Hello from Node.js!");

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>hi</h1>");
  res.write("<h2>HI</h2>")
  res.end('Hello from the server!');
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


const add = require('./2.js');
console.log(add(5, 10)); // 15
